#include <stdio.h>

int inmt(int num);

double converterToFahrenheit(double celsius);
double converterToCelsius(double fahrenheit);


void printer(){
	printf("hello \n");
}

void main(){
	int a, b, c;
	double fahrenheit, cel, celsius;

	printf("input a number: ");
	scanf("%d", &b);
	c = b;
	
	printer();
	
	for(int i = 0; i < 10; i++){		
		c = inmt(c);		
	} 
	printf("your giver number %d incresed to %d \n", b, c);
	
	printf("Input current temperature in celsius: ");
	scanf("%lf", &cel);
	
	fahrenheit = converterToFahrenheit(cel);
	printf("temperature in fahrenheit %f \n", fahrenheit);
	
	celsius = converterToCelsius(fahrenheit);
	printf("temperature in celsius %lf \n", celsius);
}

int inmt(int num){
	num++;
	printf("incresed to %d \n", num);
	return num;
}

double converterToFahrenheit(double celsius){
	double fahrenheit;
	fahrenheit = (celsius * 9/5 ) + 32;
	return fahrenheit;
}

double converterToCelsius(double fahrenheit){
	double celsius = (fahrenheit - 32) * 5/9;
	return celsius;
}

