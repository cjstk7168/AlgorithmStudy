package study.algorithm;

import java.util.ArrayList;
import java.util.List;

public class Marathon {

    static class Person {
        String name;
        boolean isComplete;
        Person(String name) {
            this.name = name;
            this.isComplete = false;
        }
    }

    private static List<Person> persons = new ArrayList<>();

    public static void main(String[] arg) {
        String[] participant = new String[] {"mislav", "stanko", "mislav", "ana"};
        String[] completion = new String[] {"stanko", "ana", "mislav"};

        // 전체 사용자 셋팅
        for(String p : participant) {
            persons.add(new Person(p));
        }

        // 완주자 셋팅
        for(String c : completion) {
            for(Person p : persons) {
                if(p.name.equals(c) == true) {
                    p.isComplete = true;
                }
            }
        }

        // 미 완주자 출력
        for(Person p : persons) {
            if(p.isComplete == false) {
                System.out.println(p.name);
                // 1명만 잡으면 되므로 루프 종료
                break;
            }
        }
    }
}
