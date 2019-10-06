#include <stdio.h>
#include <string.h>
#include <dirent.h>

void dirFile(char *dirPath, const int step){
    int i;
	char dpath[1000];
    struct dirent *dp;
    DIR *dir = opendir(dirPath);

    while ((dp = readdir(dir)) != NULL){
        if (strcmp(dp->d_name, ".") != 0 && strcmp(dp->d_name, "..") != 0){
             for (i=0; i<step; i++) {
                if (i%2 == 0 || i == 0)
                    printf("|");
                else
                    printf("  ");
            }
			printf("|--%s\n", dp->d_name);
            strcpy(dpath, dirPath);
            strcat(dpath, "/");
            strcat(dpath, dp->d_name);
            dirFile(dpath, step+2);
        }
    }
    closedir(dir);
}

int main(){
    char path[100];
    printf("Enter path to list files: ");
    scanf("%s", path);
    dirFile(path, 0);
    return 0;
}

