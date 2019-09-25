#include <stdio.h>
#include <string.h>
 
typedef char shop[10];
typedef struct Books{
	int bid;
	char title[10];
	float price;
}Book;

union Shop{
	int shopNum;
	shop sname;
};
struct{
	unsigned int age : 3;
}Age;

int main(){
	union Shop bs;
	bs.shopNum = 1416;
	printf("\n %d \t", bs.shopNum);
	strcpy(bs.sname, "boi mela");
	printf("%s\n", bs.sname);
	shop s1 = "batighor";
	Book b1 = {1302, "C language"};
	b1.price = 87.89;
	printf("\n %s -> book#1 details::%d \t %s \t %.2f \n",s1, b1.bid, b1.title, b1.price);
	printf("\n SizeOf age : %d\n", sizeof(Age));
	Age.age = 1;
	printf("\n age is : %d\n", Age.age);
	Age.age = 5;
	printf("\n age is : %d\n", Age.age);
	Age.age = 6;
	printf("\n age is : %d\n", Age.age);
	return 0;
}