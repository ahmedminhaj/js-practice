#include <stdio.h>

struct student{
	int roll;
	char name[10];
	int marks[3];
	float avg;
};

int main(){
	int i, j;
	struct student s[3];
	for(i = 0; i < 3; i++){
		printf("\nEnter roll::");
		scanf("%d", &s[i].roll);
		printf("\nEnter name::");
		scanf("%s", &s[i].name);
		float a = 0;
		for(j = 0; j < 2; j++){
			printf("\nEnter marks[%d]::", j);
			scanf("%d", &s[i].marks[j]);
			a += s[i].marks[j];
			s[i].avg = a/2;
		}
	}
	printf("\nstudent list\n");
	for(i = 0; i < 3; i++){
		printf("Roll:%d\t Name:%s \t Avarage marks:%.2f\n", s[i].roll, s[i].name, s[i].avg);
	}
	return 0;
}