#include <stdio.h>

int main(){
	FILE *fp;
	char a[255], b[255], c[255], d[255];
	
	fp = fopen("text.txt", "r");
	fscanf(fp, "%s", a);
	printf("1: %s\n", a);
	
	fscanf(fp, "%s", b);
	printf("2: %s\n", b);
	
	fscanf(fp, "%s", c);
	printf("3: %s\n", c);
	
	fscanf(fp, "%s", d);
	printf("4: %s\n", d);
	fclose(fp);
	
	fp = fopen("output.txt", "w");
	fprintf(fp, a);
	fprintf(fp, " ");
	fprintf(fp, d);
	fprintf(fp, "\n");
	fprintf(fp, c);
	fprintf(fp, " ");
	fprintf(fp, b);
	fclose(fp);
}