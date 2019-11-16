function square_equation() {
      let a=document.square.square_a.value;
      let b=document.square.square_b.value;
      let c=document.square.square_c.value;
      let s;
      let sol=document.getElementById("square_sol");
      let d=b*b-4*a*c;
      if (a==0||b==0){
          s="Введите все необходимые коэффициенты, пожалуйста"
      } else {
      if (d<0) {
        s="Действительных корней нет!"
      } else {
        if (d==0) {
          s="x1 = x2 = ";
          s+=-b/(2*a);
        } else {
          s="x1 = ";
          s+=-b/(2*a)-Math.sqrt(d)/(2*a);
          s+=", x2 = ";
          s+=-b/(2*a)+Math.sqrt(d)/(2*a);
        }
      }
    }
    alert(s);
    }