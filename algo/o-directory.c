#include <dirent.h>
#include <stdio.h>
 
int main(){
	DIR *d;
    struct dirent *dir;
    d = opendir("F:\\test");
    if (d){
        while ((dir = readdir(d)) != NULL){
			printf("%s\n", dir->d_name);   
        }
        closedir(d);
    }
    return(0);
}