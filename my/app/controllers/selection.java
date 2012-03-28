package controllers;


import play.*;
import play.mvc.*;

import java.util.*;

import models.*;
import play.data.validation.Required;


/**
 *
 * @author SANKEERTH
 */
public class selection extends Controller{
    public static void store(@Required String username,@Required int phno){
          flash.success("Welcome %s", username);
      
        
      }

    
}
