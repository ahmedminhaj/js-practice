#include <stdio.h>
#include <stdlib.h>

int s_length(char*);
void s_copy(char*, char*);
int s_compare(char*, char*);
void s_concat(char*, char*);
char *s_string(char*, int , int );

int main(){
	char str1[] = "helloo";
	char str2[] = "dhaka";
	char str3[] = "concate ";
	char str4[] = "world!!!";
	char *s1, *s2, *s3, *s4;
	s1 = str1;
	s2 = str2;
	s3 = str3;
	s4 = str4;
	printf("Length of string: %d\n", s_length(s1));
	printf("difference: %d\n", s_compare(s1, s2));
	s_copy(s1, s2);
	printf("Copied string: ");
	puts(s2);
	s_concat(s3, s4);
	printf("Concatenated string:");
	puts(s3);
	printf("substring::%s\n", s_string(s4, 1, 3));
	return 0;
}

int s_length(char *s){
	int i = 0;
	for(i = 0; *s != '\0'; s++){
		i++;
	}	
	return i;
}

void s_copy(char *o, char *c){
	while((*c = *o) != '\0'){
		o++;
		c++;
	}
}
void s_concat(char *s3, char *s4){
	int i, j;
	for(i = 0; *(s3+i) != '\0'; ++i);
	for(j = 0; *(s4+j) != '\0'; ){
		*(s3+i) = *(s4+j);
		 ++j;
		 ++i;
	}
	*(s3+i) = '\0';
}

int s_compare(char *s1, char *s2){
	int d;
	while(*s1 == *s2){
		if(*s1 == '\0' || *s2 == '\0'){
			break;
		}
		s1++;
		s2++;
	}
	if(*s1 == '\0' && *s2 == '\0'){
		return 0;
	}else{
		if(s_length(s1) > s_length(s2)){
			d = s_length(s1) - s_length(s2);
			return d;
		}else{
			d = s_length(s2) - s_length(s1);
			return d;
		}
	}
	
}

char *s_string(char *s4, int s, int e){
	char *sub;
	int i;
	sub = malloc(e+1);
	for(i=0; i<e; i++){
	   *(sub+i) = *(s4+s);
	   s4++;
	}
	*(sub+i) = '\0';
	return sub;
}

