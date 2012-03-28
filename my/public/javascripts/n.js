
function validate()
{
   var uname=reg.uid.value;
   var paswd=reg.pwd.value;
   var tnam=reg.tname.value;
   var tnum=reg.tno.value;
   var tpd=reg.tpwd.value;
   var tans=reg.ans.value;
   var t2ans=reg.ans2.value;
   var taddr=reg.addr.value;
   var teid=reg.eid.value;
   var date=reg.date.value;
   var month=reg.month.value;
   var year=reg.year.value;
  if(uname.length==0)
  {
     alert("Enter User Name");
     reg.uid.focus();
     return false;
  }
  if(uname.length<3)
  {
     alert("UserName Should not be less than 3 Characters");
     reg.uid.focus();
     return false;
   }
   if(paswd.length==0)
   {
      alert("Enter password");
      reg.pwd.focus();
      return false;
   } 
   if(paswd.length<6 || paswd.length>15)
   {
     alert("Password must be in the range of 6-15 characters");
     reg.pwd.focus();
     return false;
  }
   if(tpd.length==0)
  {
     alert("Enter Confirm password");
     reg.tpwd.focus();
     return false;
   }
   if(paswd!=tpd)
   {
     alert("Password and Confirmation Password are Mismatched...!");
     reg.pwd.focus();
     return false;
   }
   if(tnam.length==0)
   {
     alert("Enter  Name");
     reg.tname.focus();
     return false;
  }
if(date=="0")
{
 alert("choose a date for date of birth");
 reg.date.focus();
 return false;
}
if(month=="0")
{
 alert("choose a Month for date of birth");
 reg.month.focus();
 return false;
}
if(year=="0")
{
 alert("choose an Year for date of birth");
 reg.year.focus(); 
 return false;
}
if(!(year=="2" || year=="6" || year=="10" || year=="14") && month=="2" && date=="29")
{
     alert("Invalid Date");
     reg.date.focus();
    return false;
 }
if(month=="2" && date>29)
{
 alert("Invalid Date");
 reg.date.focus();
 return false;
}
if((month=="4" || month=="6" || month=="9" || month=="11") && date>30)
{
     alert("Invalid Date");
     reg.date.focus();
    return false;
 }
      if(reg.country.value==0)
  {
     alert("Select Country");
     reg.country.focus();
     return false;
   }
    if(teid.length==0)
    {
      alert("Enter Email Id");
      reg.eid.focus();
      return false;
    }
      if(teid.lastIndexOf('@')==-1 || teid.lastIndexOf('.')==-1)
    {
         alert("Email should contain '@' and '.'");
         reg.eid.focus();
         return false;
    }
    if(teid.charAt(0)=="." || teid.charAt(0)=="@" || teid.charAt(1)=="." ||    teid.charAt(1)=="@" || teid.lastIndexOf('@')>teid.lastIndexOf('.'))
    {
        alert("Invalid Email Format");
        reg.eid.focus();
        return false;
    }
     if(taddr.length==0)
    {
     alert("Enter Address");
     reg.addr.focus();
     return false;
   }
   if(reg.ques.value==0)
   {
     alert("Select a Question");
     reg.ques.focus();
     return false;
   }
   if(tans.length==0)
  {
      alert("Enter Answer 1");
     reg.ans.focus();
     return false;
  }
  if(reg.ques2.value==0)
  {
     alert("Select Quest?on 2");
     reg.ques2.focus();
     return false;
   }
   if(t2ans.length==0)
  {
     alert("Enter Answer 2");
     reg.ans2.focus();
     return false;
  }
}


