#include <stdio.h>
#include <string.h>

void printString(char n[]);
void inputString(char n[]);
void checkList(char l[4][10], char n[]);

void main(){
	char title[] = "peddlecloud";
	char inputS[30];
	char list[4][10] = {"rock", "jack", "doe", "josh"};
	printString(title);
	inputString(inputS);
	
	checkList(list, inputS);
}

void inputString(char n[]){
	printf("\nPlease give some input:");
	gets(n);
}

void printString(char n[]){
	int i=0, len;
	len = strlen(n);
	
	while(i <= len){
		printf("%c", n[i]);
		i++;
	}
}

void checkList(char l[4][10], char n[]){
	int a;
	for(int i = 0; i<4; i++){
		a = strcmp(&l[i][0], n);
		if(a == 0){
			printString(n);
			printf("Congtz, u r in list\n");
			break;
		}		
	}
	if(a != 0){
		printString(n);
		printf("Sorry, u r not in list\n");
		
	}
}