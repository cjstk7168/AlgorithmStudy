#include <iostream>
#include <string>
using namespace std;


string getMiddleString(const string& str){
	size_t length = str.size();
	return (length % 2 == 0) ? str.substr(length/2 - 1, 2) : str.substr(length/2, 1);
}


int main(){
	string text;
	cin >> text;
	cout << getMiddleString(text) << endl;
}