package com.luxoft.treasure;

public class Borad {
    private static String[] board = {"3", "T", "3","2", "1","2","3","2", "3","2","1","2","3","T","3","2","3","2","3","2","3","T","3","2","1"};
    public static String[] getBoardFields(int[] fields){
        String[] results = {Borad.board[fields[0]], Borad.board[fields[1]], Borad.board[fields[2]]};
        return results;
    }
}