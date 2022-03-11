```function calculaNota(ex, p1, p2) {
  let calculeMedia = (p1 + p2 + ex) /3
  if (calculeMedia >= 9){
    return "A"
  }
  if (calculeMedia >= 7.5){
    return "B"
  }
  if (calculeMedia >= 6){
    return "C"
  }
  else {
    return "D"
  }
}
```