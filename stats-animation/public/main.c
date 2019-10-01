#include<stdlib.h>
#include<time.h>
#include<math.h>
#include<string.h>

#define WASM_EXPORT __attribute__((visibility("default")))
#define random(a,b) (((double)rand()/RAND_MAX)*((b)-(a))+(a))
#define distance(x1,y1,x2,y2) (sqrt(pow(x1-x2,2)+pow(y1-y2,2)))

typedef unsigned char uint8_t;

WASM_EXPORT
uint8_t *create_buf(int size) {
  return (uint8_t *)malloc(size);
}

typedef struct point_t {
  int w, h;
  float x, y, vx, vy, ax, ay, a, va, d;
  struct point_t *p;
} point_t;

point_t ph;

WASM_EXPORT
void init(int width, int height, int left, int top, float a, float b) {
  srand((int)time(0));
  point_t **pp = &(ph.p);

  float dd = distance(0.0, 0.0, (float)width, (float)height);
  for (int h = 0; h < height; h += 3) {
    for (int  w = 0; w < width; w += 3) {
      float d = distance(w * 0.7, h * 0.5, 0.0, (float)height) / dd * a;
      point_t *p = *pp = (point_t *)malloc(sizeof(point_t));
      p->w = w;
      p->h = h;
      p->x = w + left + random(-20.0, -10.0);
      p->y = h + top + random(-20.0, 10.0);
      p->vx = random(3.0, 6.0);
      p->vy = random(-2.0, 2.0);
      p->ax = 0.03;
      p->ay = -0.04;
      p->a = 255.0;
      p->va = random(0.5, 0.99);
      p->d = random(d - b, d + b);
      pp = &p->p;
    }
  }
}

WASM_EXPORT
void drop() {

}

WASM_EXPORT
void update (int width, int height) {
    point_t *h = &ph;
    point_t *p = ph.p;
    while (p) {
      if (p->d > 0) {
        p->d -= 1.0;
      } else {
        p->vx += p->ax;
        p->vy += p->ay;
        p->x += p->vx;
        p->y += p->vy;
        p->a *= p->va;
        if (p->a <= 1.0 || p->x >= width || p->y >= height || p->x < 0 || p->y < 0) {
          point_t *pp = p;
          h->p = p->p;
          p = h;
          free(pp);
        }
      }
      h = p;
      p = p->p;
    }
}

void renderPixel(uint8_t *input, uint8_t *output, int dw, int dh, int sw, int sh, int dx, int dy, int sx, int sy, int a) {
  if (dx >= dw || dx < 0) return;
  if (dy >= dh || dy < 0) return;
  int d = (dw * dy + dx) << 2;
  int s = (sw * sy + sx) << 2;
  output[d + 0] = input[s + 0];
  output[d + 1] = input[s + 1];
  output[d + 2] = input[s + 2];
  output[d + 3] = a;
}

void renderPoint (uint8_t *input, uint8_t *output, int dw, int dh, int sw, int sh, int ox, int oy, point_t *p) {
  float d = p->d;
  int w = p->w;
  int h = p->h;
  int x = (int)floor(p->x);
  int y = (int)floor(p->y);
  int a = (int)floor(p->a);
  if (d > 0) {
    x = w + ox;
    y = h + oy;
  }

  renderPixel(input, output, dw, dh, sw, sh, x, y, w, h, a);

  if (a > 50) {
    renderPixel(input, output, dw, dh, sw, sh, x+1, y,   w+1, h,   a);
    renderPixel(input, output, dw, dh, sw, sh, x+1, y+1, w+1, h+1, a);
    renderPixel(input, output, dw, dh, sw, sh, x,   y+1, w,   h+1, a);
  }

  if (a > 120) {
    renderPixel(input, output, dw, dh, sw, sh, x+2, y,   w+2, h,   a);
    renderPixel(input, output, dw, dh, sw, sh, x+2, y+1, w+2, h+1, a);
    renderPixel(input, output, dw, dh, sw, sh, x+2, y+2, w+2, h+2, a);
    renderPixel(input, output, dw, dh, sw, sh, x+1, y+2, w+1, h+2, a);
    renderPixel(input, output, dw, dh, sw, sh, x,   y+2, w,   h+2, a);
  }

  if (a > 200) {
    renderPixel(input, output, dw, dh, sw, sh, x+3, y,   w+3, h,   a);
    // renderPixel(input, output, dw, dh, sw, sh, x+3, y+1, w+3, h+1, a);
    renderPixel(input, output, dw, dh, sw, sh, x+3, y+2, w+3, h+2, a);
    // renderPixel(input, output, dw, dh, sw, sh, x+3, y+3, w+3, h+3, a);
    renderPixel(input, output, dw, dh, sw, sh, x+2, y+3, w+2, h+3, a);
    // renderPixel(input, output, dw, dh, sw, sh, x+1, y+3, w+1, h+3, a);
    renderPixel(input, output, dw, dh, sw, sh, x,   y+3, w,   h+3, a);
  }
}

WASM_EXPORT
void render (uint8_t *input, uint8_t *output, int dw, int dh, int sw, int sh, int ox, int oy) {
  memset(output, 0, dw * dh * 4 * sizeof(uint8_t));
  point_t *p = ph.p;
  while (p) {
    renderPoint(input, output, dw, dh, sw, sh, ox, oy, p);
    p = p->p;
  }
}