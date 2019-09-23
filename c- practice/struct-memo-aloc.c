#include <stdio.h>
#include <stdlib.h>

struct student{
	char name[30];
	int roll;
};

int main(){
	struct student *s;
	s = (struct student*)malloc(1*sizeof(struct student));
	if(s == NULL){
		printf("Insufficient memory..");
		return 0;
	}
	
	printf("Enter name:: ");
	gets(s->name);
	printf("Enter roll::");
	scanf("%d", &s->roll);
	printf("name:%s, roll:%d\n", s->name, s->roll);
	free(s);
}
