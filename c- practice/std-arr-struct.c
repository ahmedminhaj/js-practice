#include <stdio.h>

struct student{
	int roll;
	char name[10];
};

int main(){
	int i;
	struct student s[5];
	for(i = 0; i < 5; i++){
		printf("\nEnter roll::");
		scanf("%d", &s[i].roll);
		printf("\nEnter name::");
		scanf("%s", &s[i].name);	
	}
	printf("\nstudent list\n");
	for(i = 0; i < 5; i++){
		printf("Roll:%d\t Name:%s\n", s[i].roll, s[i].name);
	}
	return 0;
}