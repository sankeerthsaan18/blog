package controllers;


import play.*;
import play.mvc.*;

import java.util.*;

import models.*;
import play.data.validation.Required;

public class Application extends Controller {
      public static void index1() {
        render();
    }
         public static void DET() {
             tab start=tab.find("order by postedAt desc").first();
        List<tab> end = tab.find(
            "order by postedAt desc"
        ).from(1).fetch(10);
       
        render(start,end);
        
    }
      public static void store(@Required String username,@Required int phno){
          
         tab M=new tab(username,phno);
         M.save();
         flash.success("Welcome %s", username);
         index(username);
        
      }

    public static void index(String username) {
        render(username);
        
    }
       public static void selection() {
        render();
    }
     public static void coni() {
        render();
    }
public static void fest() {
        render();
    }public static void resr() {
        render();
    }public static void wedding() {
        render();
    }public static void medical() {
        render();
    }public static void s(String myName) {
        render(myName);
    }public static void signin() {
        render();
    }
}