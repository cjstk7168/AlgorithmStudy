#include <iostream>

using namespace std;

int countBit(int number){
	int count = 0;
	while(number != 0){
		if(number & 1) count++;
		number = number >> 1;
	}
	return count;
}

int nextNumber(int n){
	int count = countBit(n);
	while(countBit(n) != count){
		n++;
	}
	return n;
}

int main(){
	int n;
	cin >> n;
	cout << nextNumber(n) <<endl;
	return 1;
}