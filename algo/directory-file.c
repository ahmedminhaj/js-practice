#include <stdio.h>
#include <string.h>
#include <dirent.h>

void dirFile(char *dirPath){
    char path[1000];
    struct dirent *dp;
    DIR *dir = opendir(dirPath);

    while ((dp = readdir(dir)) != NULL){
        if (strcmp(dp->d_name, ".") != 0 && strcmp(dp->d_name, "..") != 0){
            printf("%s\n", dp->d_name);
            strcpy(path, dirPath);
            strcat(path, "/");
            strcat(path, dp->d_name);
            dirFile(path);
        }
    }
    closedir(dir);
}

int main(){
    char path[100];
    printf("Enter path to list files: ");
    scanf("%s", path);
    dirFile(path);
    return 0;
}

