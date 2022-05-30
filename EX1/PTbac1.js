function PTbac1(a, b) {
    if (a == 0 &&  b == 0) {
        alert("phương trình có vô số nghiệm.")
    } else if (a ==0) {
        alert(" phương trình vô nghiệm")

    }else if (a !==0 && b!==0){
        alert("phương trình có nghiệm duy nhất x="  + (-b/a))
    }
}
PTbac1(5,8)