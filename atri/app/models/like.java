package models;
 
import java.util.*;
import javax.persistence.*;


import play.data.binding.*;
import play.data.validation.*;

import play.db.jpa.Model;




@Entity
public class like extends Model 
{
 
   

 @Required
    public int count;
 static int s=0;
  
   @OneToMany(mappedBy="cs", cascade=CascadeType.ALL)
  
  public List<like> cs;
 
   public like(int count) 
{ 
     
          
   this.count =count;
  
      }
	  public static int increament(int count) {
        like li;
   
		count=s+1;
        return count;
    }
   
  

 public int toInteger()
 {
        return count;
    }
 
}
