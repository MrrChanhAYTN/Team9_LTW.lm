#include<pthread.h>
#include<stdio.h>
#include<unistd.h>
#include<semaphore.h>
#include <stdlib.h>
sem_t mutexMan,mutexWoman,mutexRun;
void* Man(void* arg){ 
 	while(1)
 	{
 		sem_wait(&mutexMan);
		sleep(1);
 		printf("Man getting into the alevator\n");
 		sleep(1);
 		sem_post(&mutexRun);
 	}
 }
void* Woman(void *arg){ 
 	while(1)
 	{
 		sem_wait(&mutexWoman);
 		printf("Woman getting into the alevator\n");
 		sleep(2);
 		sem_post(&mutexRun);
 	}
}
void* Run(void *arg){ 
 	while(1)
 	{
 		sem_wait(&mutexRun);
 		sem_wait(&mutexRun);
 		sem_wait(&mutexRun);
 		printf("---> The elevator started running!\n\n");
 		sleep(2);
 		sem_post(&mutexWoman);
 		sem_post(&mutexWoman);
 		sem_post(&mutexMan);

 }

}
int main(){
 	sem_init(&mutexMan,0,1);
 	sem_init(&mutexWoman,0,2);
 	sem_init(&mutexRun,0,1);
 	pthread_t t1,t2,t3;
 	pthread_create(&t1,NULL,Woman,NULL);
 	pthread_create(&t2,NULL,Man,NULL);
 	pthread_create(&t3,NULL,Run,NULL);
 	pthread_join(t1,NULL);
 	pthread_join(t2,NULL);
 	pthread_join(t3,NULL);
 	sem_destroy(&mutexMan);
 	sem_destroy(&mutexWoman);
 	sem_destroy(&mutexRun);
}



