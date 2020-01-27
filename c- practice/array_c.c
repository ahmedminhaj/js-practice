#include <stdio.h>

void getMarks(int m[], int c);
void showMarks(int m[], int c);
float avagareMarks(int m[], int c);
void getStudentList(int list[][2], int s);
void showStudentList(int list[][2], int s);

void main(){
	int students;
	
	printf("enter number of student: ");
	scanf(" %d", &students);
	int studentList[students][2];
	getStudentList(studentList, students);
	showStudentList(studentList, students);
}

void getMarks(int m[], int c){
	for(int i = 0; i < c; i++){
		printf("input marks %d : ", i+1);
		scanf("%d", &m[i]);
	}
}

void showMarks(int m[], int c){
	for(int i = 0; i < c; i++){
		printf("\nmarks of course %d : %d", i+1, m[i]);
	}
}

float avagareMarks(int m[], int  c){
	float sum = 0.0;
	for(int i = 0; i < c; i++){
		sum = sum + m[i];
	}
	float avg = sum / c;
	return avg;
}

void getStudentList(int list[][2], int s){
	for(int i = 0; i < s; i++){
		printf("\nEnter the student's roll: ");
		scanf(" %d", &list[i][0]);
		int courses;
		printf("enter the number of course of student %d: ", list[i][0]);
		scanf(" %d", &courses);
		int marks[courses];
		getMarks(marks, courses);
		list[i][1] = avagareMarks(marks, courses);
	}
}

void showStudentList(int list[][2], int s){
	int marks[s];
	printf("\nStudent marks sheet\n");
	for(int i = 0; i < s; i++){
		marks[i] = list[i][1];
		printf("Roll: %d, avarage mark: %d\n", list[i][0], list[i][1]);
	}
	printf("\nAvarage marks of class: %f", avagareMarks(marks, s));
	
}