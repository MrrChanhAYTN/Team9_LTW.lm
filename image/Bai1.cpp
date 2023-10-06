#include<iostream>
#include<unistd.h>
#include<stdio.h>
#include<string.h>
#include<sstream>
#include<sys/wait.h>
using namespace std;
///home/lemont/inut.txt
int main(int argc, char* argv[]){
	FILE *f, *p, *s;
	pid_t pid = fork();
	if(pid < 0){
		cout<<"Error";
	}else{
		if(pid == 0){
			if(argc < 2 || access(argv[1], F_OK) == -1){
				return 0;
			}
			f = fopen(argv[1], "r");
			p = fopen(argv[2], "w");
			char s;
			int num;
			fseek(f, SEEK_SET, 0);
			while(fscanf(f, "%d", &num) != EOF){
				if(num % 2 == 0){
					fprintf(p, "%d", num);
 					fprintf(p, "%c", ' ');	
				}
			}
		}else{
			wait(NULL);
			int num, sum = 0;
			s = fopen(argv[2], "r");
			if(argc < 3){
				cout<<"Khong truyen du doi so!"<<endl;
				return 0;
			}else if(access(argv[1], F_OK) == -1){
				cout<<"Ten file khong ton tai!";
				return 0;
			}else{
				while(fscanf(s, "%d", &num) != EOF){
					sum+=num;
				}
				cout<<"Tong cac so chan trong file la: "<<sum;
			}
		}
	}
}
