package models;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import play.data.validation.Required;
import play.db.jpa.JPABase;

import play.db.jpa.Model;

@Entity
public class tab extends Model {
 @Required
	public String username;

 @Required	
	public int phno;
	
@Required
    public Date postedAt;

@ManyToOne
    public tab post;

	public tab(String username,int phno) {

		this.username = username;
		 this.postedAt = new Date();
		this.phno = phno;
       this.save();
                       
	}

  
        public Integer toInteger() {
        return phno;
    }
    @Override
 public String toString() {
        return username;
    }


}