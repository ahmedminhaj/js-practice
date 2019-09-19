#include <stdio.h>
#include <string.h>
 
struct college{
    int cid;
    char cname[50];
};

struct address{
	int road;
	char city[20];
};
 
struct student {
    int sid;
    char sname[20];
    struct college clg;
	struct address a;
};
 
int main() {	
	struct college c = { 4221, "Chittagong University"};
    struct student stu = {1, "Raju", 71145, "Dhaka University", 6, "Dhaka"};
    printf(" Id is: %d \n", stu.sid);
    printf(" Name is: %s \n", stu.sname);
    printf(" College Id is: %d \n", stu.clg.cid);
    printf(" College Name is: %s \n", stu.clg.cname);
    printf(" City Name is: %s \n", stu.a.city);
    printf(" Road: %d \n", stu.a.road);
	
	printf(" College Id is: %d \n", c.cid);
    printf(" College Name is: %s \n", c.cname);
    return 0;
}