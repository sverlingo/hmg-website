$(document).ready(function() {
  $('#service-link').click(function(){

    $('html, body').animate({scrollTop: $("#services").offset().top}, 'slow');

  });

  $('#area-link').click(function(){

    $('html, body').animate({scrollTop: $("#service-areas").offset().top}, 'slow');

  });

  $('#portfolio-link').click(function(){

    $('html, body').animate({scrollTop: $("#portfolio").offset().top}, 'slow');

  });

  $('#contact-link').click(function(){

    $('html, body').animate({scrollTop: $("#contact").offset().top}, 'slow');

  });

  $('#first').hover(function() {
    document.getElementById('forth').style.fontSize='25px';
    document.getElementById('forth').style.fontWeight= "normal";
    document.getElementById('second').style.fontSize='25px';
    document.getElementById('second').style.fontWeight= "normal";
    document.getElementById('third').style.fontSize='25px';
    document.getElementById('third').style.fontWeight= "normal";
    document.getElementById('fifth').style.fontSize='25px';
    document.getElementById('fifth').style.fontWeight= "normal";
    document.getElementById('sixth').style.fontSize='25px';
    document.getElementById('sixth').style.fontWeight= "normal";
      document.getElementById('first').style.fontSize='30px';
      document.getElementById('first').style.fontWeight= "bold";
      document.getElementById('timeline-header').textContent="First Generation";
      document.getElementById('timeline-description').textContent="The first generation of the Hemmer family in the construction and real estate industries was started by John M. Hemmer. John M. Construction Company was founded in 1921 on values of old craftsmanship and master builder techniques. In the beginning, this company primarily focused on constructing residential single family homes and small apartment complexes, some of which they owned and rented out."
      document.getElementById('timeline-header-two').style.display = "none";
      document.getElementById('timeline-description-two').style.display = "none";
      document.getElementById('photo-cont').style.backgroundImage = 'url("images/PH1 JMH Truck.jpg")';
  });


    $('#second').hover(function() {
      document.getElementById('first').style.fontSize='25px';
      document.getElementById('first').style.fontWeight= "normal";
      document.getElementById('forth').style.fontSize='25px';
      document.getElementById('forth').style.fontWeight= "normal";
      document.getElementById('third').style.fontSize='25px';
      document.getElementById('third').style.fontWeight= "normal";
      document.getElementById('fifth').style.fontSize='25px';
      document.getElementById('fifth').style.fontWeight= "normal";
      document.getElementById('sixth').style.fontSize='25px';
      document.getElementById('sixth').style.fontWeight= "normal";
        document.getElementById('second').style.fontSize='30px';
        document.getElementById('second').style.fontWeight= "bold";
        document.getElementById('timeline-header').textContent="Second Generation";
        document.getElementById('timeline-description').textContent="After World War II, in the late 1940’s the second generation of the Hemmer family began to work for the family company. As the “Baby Boom” started, the company began constructing hospitals, schools, churches and other community facilities."
        document.getElementById('timeline-header-two').style.display = "none";
        document.getElementById('timeline-description-two').style.display = "none";
        document.getElementById('photo-cont').style.backgroundImage = 'url("images/1940_hospital.jpg")';
    });
    $('#third').hover(function() {
      document.getElementById('first').style.fontSize='25px';
      document.getElementById('first').style.fontWeight= "normal";
      document.getElementById('second').style.fontSize='25px';
      document.getElementById('second').style.fontWeight= "normal";
      document.getElementById('forth').style.fontSize='25px';
      document.getElementById('forth').style.fontWeight= "normal";
      document.getElementById('fifth').style.fontSize='25px';
      document.getElementById('fifth').style.fontWeight= "normal";
      document.getElementById('sixth').style.fontSize='25px';
      document.getElementById('sixth').style.fontWeight= "normal";
        document.getElementById('third').style.fontSize='30px';
        document.getElementById('third').style.fontWeight= "bold";
        document.getElementById('timeline-header').textContent="Industrial Size Growth";
        document.getElementById('timeline-description').textContent="In the late 1960’s, the Hemmer family purchased the remaining undeveloped industrial land consisting of approximately 1,000 acres in the Northern Kentucky Industrial Park (NKIP) in Florence, KY, which is the largest industrial park in Greater Cincinnati and the second largest industrial park in the State of Kentucky. NKIP comprises approximately 1,200 acres. At that time, they began to construct industrial facilities for various companies."
        document.getElementById('timeline-header-two').style.display = "none";
        document.getElementById('timeline-description-two').style.display = "none";
        document.getElementById('photo-cont').style.backgroundImage = 'url("images/1960_industry.jpg")';
    });

    $('#forth').hover(function() {
      document.getElementById('first').style.fontSize='25px';
      document.getElementById('first').style.fontWeight= "normal";
      document.getElementById('second').style.fontSize='25px';
      document.getElementById('second').style.fontWeight= "normal";
      document.getElementById('third').style.fontSize='25px';
      document.getElementById('third').style.fontWeight= "normal";
      document.getElementById('fifth').style.fontSize='25px';
      document.getElementById('fifth').style.fontWeight= "normal";
      document.getElementById('sixth').style.fontSize='25px';
      document.getElementById('sixth').style.fontWeight= "normal";
        document.getElementById('forth').style.fontSize='30px';
        document.getElementById('forth').style.fontWeight= "bold";
        document.getElementById('timeline-header').textContent="Third Generation";
        document.getElementById('timeline-description').textContent="In the 1970’s, as the third generation of the Hemmer family began to work for the family company, they began to develop multi-tenant flexible office-warehouse buildings in NKIP. As the Greater Cincinnati airport began to grow in the 1980’s, the Hemmer family began to invest in industrial land closer to the airport in Northern Kentucky. Then the Hemmer family began to develop multi-tenant flexible office-warehouse buildings near the airport. That continued into 2000’s."
        document.getElementById('timeline-header-two').style.display = "none";
        document.getElementById('timeline-description-two').style.display = "none";
        document.getElementById('photo-cont').style.backgroundImage = 'url("images/1970_florence.png")';
    });
    $('#fifth').hover(function() {
      document.getElementById('first').style.fontSize='25px';
      document.getElementById('first').style.fontWeight= "normal";
      document.getElementById('second').style.fontSize='25px';
      document.getElementById('second').style.fontWeight= "normal";
      document.getElementById('third').style.fontSize='25px';
      document.getElementById('third').style.fontWeight= "normal";
      document.getElementById('forth').style.fontSize='25px';
      document.getElementById('forth').style.fontWeight= "normal";
      document.getElementById('sixth').style.fontSize='25px';
      document.getElementById('sixth').style.fontWeight= "normal";
        document.getElementById('fifth').style.fontSize='30px';
        document.getElementById('fifth').style.fontWeight= "bold";
        document.getElementById('timeline-header').textContent="Adding Medical & Office";
        document.getElementById('timeline-description').textContent="Also in the mid-1980’s, the Hemmer family began to acquire land for medical and professional office and other commercial uses. At that time, the Hemmer family acquired the remaining undeveloped commercial land consisting of approximate 150 acres in Thomas More Centre in Crestview Hills, KY, which is adjacent to Thomas More College and Saint Elizabeth Hospital South Campus, in addition to other parcels of commercial land in the Fort Mitchell, KY area. At that time, they began to construct commercial facilities for various companies. Also, development of some of this commercial land for multi-tenant flexible office buildings quickly began to follow."
        document.getElementById('timeline-header-two').style.display = "none";
        document.getElementById('timeline-description-two').style.display = "none";
        document.getElementById('photo-cont').style.backgroundImage = 'url("images/1980_medical.jpg")';
    });
    $('#sixth').hover(function() {
      document.getElementById('first').style.fontSize='25px';
      document.getElementById('first').style.fontWeight= "normal";
      document.getElementById('second').style.fontSize='25px';
      document.getElementById('second').style.fontWeight= "normal";
      document.getElementById('third').style.fontSize='25px';
      document.getElementById('third').style.fontWeight= "normal";
      document.getElementById('fifth').style.fontSize='25px';
      document.getElementById('fifth').style.fontWeight= "normal";
      document.getElementById('forth').style.fontSize='25px';
      document.getElementById('forth').style.fontWeight= "normal";
        document.getElementById('sixth').style.fontSize='30px';
        document.getElementById('sixth').style.fontWeight= "bold";
        document.getElementById('timeline-header').textContent="Focus on Management";
        document.getElementById('timeline-description').textContent="Hemmer Management Group (HMG) was formed at the end of 2011 with a primary focus to manage and oversee the Hemmer family commercial real estate portfolio and acquire additional properties. Currently, HMG manages 25 commercial buildings totaling more than 1.2 million square feet with a value in excess of $100 million primarily located in the Greater Cincinnati region."
        document.getElementById('timeline-header-two').style.display="block";
        document.getElementById('timeline-description-two').style.display="block";
        document.getElementById('photo-cont').style.backgroundImage = 'url("images/2000_hemmerhq.jpg")';
    });

});
