#include <stdio.h>
#define lower 0
#define upper 300
#define step 50

main(){
    float f, c;
    f = lower;
    printf("Fahrenheit \t Celsius\n");
    while(f <= upper){
        c = (5.0/9.0) * (f - 32.0);
        printf("%2.0f \t\t %3.1f \n", f, c);
        f = f + step;
    }

    c = lower;
    printf("\nCelsius \t Fahrenheit\n");
    while(c <= upper){
        f = (c * (9.0/5.0)) + 32;
        printf("%3.1f \t\t %2.0f\n", c, f);
        c = c + step;
    }

    int fahr;
    float cel;
    printf("\nFahrenheit \t Celsius\n");
    for (fahr = 300; fahr >= 0; fahr = fahr - 50){
        cel = ((5.0/9.0) * (fahr - 32.0));
        printf("%2d \t\t %3.1f \n", fahr, cel);
    }
}
