#include <stdio.h>
#include <string.h>

struct person{
	int nid;
	char name[20];
	int salary;
};

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

struct person salaryIncrement(struct person i);
void showAddr(struct address *);
void details(struct person r);
 
int main() {
	struct person p = {19013, "Jabbor", 25000};
	struct address ads = {05, "Chittagong"};
	struct college c = { 4221, "Chittagong college"};
    struct student stu = {1, "Raju", 71145, "Dhaka college", 6, "Dhaka"};
    printf(" Id is: %d \n", stu.sid);
    printf(" Name is: %s \n", stu.sname);
    printf(" College Id is: %d \n", stu.clg.cid);
    printf(" College Name is: %s \n", stu.clg.cname);
    printf(" City Name is: %s \n", stu.a.city);
    printf(" Road: %d \n", stu.a.road);
	
	printf(" College Id is: %d \n", c.cid);
    printf(" College Name is: %s \n", c.cname);
	details(p);
	showAddr(&ads);
	p = salaryIncrement(p);
	details(p);
    return 0;
}

void details(struct person r){
	printf(" Person name: %s\n", r.name);
	printf(" Person nid: %d\n", r.nid);
	printf(" Person salary: %d\n", r.salary);
}

void showAddr(struct address *a){
	printf(" Road::%d, City::%s\n", a->road, a->city);
}

struct person salaryIncrement(struct person i){
	i.salary += 1000;
	return i;
}

