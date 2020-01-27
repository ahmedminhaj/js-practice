#include <stdio.h>
#include <string.h>

int stringCheck(char n[] , char p[]){
	int nlength = strlen(n);
	int plength = strlen(p);
	char temp[];
	for(int i = 0; i <= nlength; i++){
		for(int j = 0; j <= plength; j++){
			if(n[i] == p[j]){
				
			}
		}
	}
}

void main(){
	
	char name[100];
	char pass[100];
	
	printf("Enter your username: ");
	scanf("%s", name);
	printf("Your Username is %s \n", name);
	
	printf("Enter password: ");
	scanf("%s", pass);
	
}