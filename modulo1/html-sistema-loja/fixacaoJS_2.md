```function calculaPrecoTotal(quantidade) {
    
    if (quantidade < 12){  
      let precoTotal = quantidade * 1.30
      return precoTotal
    } 
    if (quantidade >= 12){
      let precoTotal = quantidade * 1
      return precoTotal
    } 
}  
```  