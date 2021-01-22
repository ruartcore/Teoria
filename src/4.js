function drawRating(vote) {
  return (
    (vote <= 20) ? '★☆☆☆☆' 
    : (vote <= 40) ? '★★☆☆☆' 
    : (vote <= 60) ? '★★★☆☆' 
    : (vote <= 80) ? '★★★★☆' 
    : (vote <= 100) ? '★★★★★' 
    : '★★★★★'
  );
}
console.log(drawRating(71));
