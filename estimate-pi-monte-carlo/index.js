// Estimating the value of Pi using Monte Carlo

// Difficulty Level : Medium
// Last Updated : 13 Jun, 2022
// Monte Carlo estimation
// Monte Carlo methods are a broad class of computational algorithms that rely on repeated random sampling to obtain numerical results. One of the basic examples of getting started with the Monte Carlo algorithm is the estimation of Pi.
// Estimation of Pi
// The idea is to simulate random (x, y) points in a 2-D plane with domain as a square of side 2r units centered on (0,0). Imagine a circle inside the same domain with same radius r and inscribed into the square. We then calculate the ratio of number points that lied inside the circle and total number of generated points. Refer to the image below:

// Estimating the value of Pi using Monte Carlo
// Random points are generated only few of which lie outside the imaginary circle

// We know that area of the square is 4r^{2}       unit sq while that of circle is \pi r^{2}      .  The ratio of these two areas is as follows :

// \frac{\textrm{area of the circle}}{\textrm{area of the square}} = \frac{\pi r^{2}}{4r^{2}} = \frac{\pi}{4}
// Now for a very large number of generated points,

// \frac{\pi}{4} = \frac{\textrm{no. of points generated inside the circle}}{\textrm{total no. of points generated or no. of points generated inside the square}}that is,\pi = 4 \ast \frac{\textrm{no. of points generated inside the circle}}{\textrm{no. of points generated inside the square}}
// The beauty of this algorithm is that we don’t need any graphics or simulation to display the generated points. We simply generate random (x, y) pairs and then check if x^{2} + y^{2} \leqslant 1         . If yes, we increment the number of points that appears inside the circle. In randomized and simulation algorithms like Monte Carlo, the more the number of iterations, the more accurate the result is. Thus, the title is “Estimating the value of Pi” and not “Calculating the value of Pi”. Below is the algorithm for the method:
// The Algorithm
// 1. Initialize circle_points, square_points and interval to 0.
// 2. Generate random point x.
// 3. Generate random point y.
// 4. Calculate d = x*x + y*y.
// 5. If d <= 1, increment circle_points.
// 6. Increment square_points.
// 7. Increment interval.
// 8. If increment < NO_OF_ITERATIONS, repeat from 2.
// 9. Calculate pi = 4*(circle_points/square_points).
// 10. Terminate.
// The code doesn’t wait for any input via stdin as the macro INTERVAL could be changed as per the required number of iterations. Number of iterations are the square of INTERVAL. Also, I’ve paused the screen for first 10 iterations with getch() and outputs are displayed for every iteration with format given below. You can change or delete them as per requirement.

function estimatePi(interval) {
  var randomX = (randomY = pi = distance = circlePoints = squarePoints = 0);

  for (let i = 0; i < interval; i++) {
    randomX = Math.random() * 2 - 1;
    randomY = Math.random() * 2 - 1;

    distance = randomX * randomX + randomY * randomY;

    if (distance < 1) circlePoints++;

    squarePoints++;

    pi = (4 * circlePoints) / squarePoints;
  }

  return pi;
}

console.log(estimatePi(1000));
console.log(estimatePi(100));
console.log(estimatePi(500));
console.log(estimatePi(10000));
