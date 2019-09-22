#include <stdio.h>

#define min(a, b)( a<b ? a : b)
#define max(a, b)( a>b ? a : b)

struct point{
	int x, y;
};

struct point makepoint(int x, int y){
	struct point temp;
	temp.x = x;
	temp.y = y;
	return temp;
};

struct line{
	struct point pt1;
	struct point pt2;
};

struct point addpoint(struct point p1, struct point p2){
	p1.x += p2.x;
	p1.y += p2.y;
	return p1;
};

struct line canonline(struct line r){
	struct line temp;
	temp.pt1.x = min(r.pt1.x, r.pt2.x);
	temp.pt1.y = min(r.pt1.y, r.pt2.y);
	temp.pt2.x = max(r.pt1.x, r.pt2.x);
	temp.pt2.y = max(r.pt1.y, r.pt2.y);
	return temp;
};

int pointinrect(struct point p, struct line r){
	return p.x >= r.pt1.x && p.x < r.pt2.x && p.y >= r.pt1.y && p.y < r.pt2.y;
}

int main(){
	struct line line1;
	struct line line2;
	struct line canonline(struct line);
	struct point mid;
	struct point newpoint;
	struct point addpoint(struct point, struct point);
	struct point makepoint(int, int);
	line1.pt1 = makepoint(10, 50);
	line1.pt2 = makepoint(20, 40);
	newpoint = addpoint(line1.pt1, line1.pt2);
	mid = makepoint((line1.pt1.x + line1.pt2.x)/2, (line1.pt1.y + line1.pt2.y)/2);
	printf("Middle point is:: %d, %d\n", mid);
	printf("added point is:: %d, %d\n", newpoint);
	printf("point in line(1 for yes, 0 for no):: %d\n", pointinrect(mid, line1));
	printf("Coordinates of line:: %d, %d, %d, %d\n", line1);
	line2 = canonline(line1);
	printf("canonicalize Coordinates of line:: %d, %d, %d, %d\n", line2);
}