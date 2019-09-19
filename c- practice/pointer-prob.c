#include <stdio.h>
#include <stdlib.h>

#include "pointerF.h"

int main(){
	FILE *fp;
	char a[255], b[255], c[255], d[255];
	
	fp = fopen("text.txt", "r");
	fscanf(fp, "%s", a);
	fscanf(fp, "%s", b);
	fscanf(fp, "%s", c);
	fscanf(fp, "%s", d);
	fclose(fp);
	char *s1, *s2, *s3, *s4;
	s1 = a;
	s2 = b;
	s3 = c;
	s4 = d;
	printf("Length of string: %d\n", s_length(s1));
	printf("difference: %d\n", s_compare(s1, s2));
	s_copy(s1, s2);
	printf("Copied string: ");
	puts(s2);
	s_concat(s3, s4);
	printf("Concatenated string:");
	puts(s3);
	printf("substring::%s\n", s_string(s4, 1, 4));
	fp = fopen("output.txt", "w");
	fprintf(fp, s1);
	fprintf(fp, " ");
	fprintf(fp, s2);
	fprintf(fp, "\n");
	fprintf(fp, s3);
	fprintf(fp, "\n");
	fprintf(fp, s_string(s4, 1, 4));
	fclose(fp);
	return 0;
}



