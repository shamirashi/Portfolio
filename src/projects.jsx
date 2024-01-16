import React from "react";

export default function Projects(){
    return(
        <>
        <div className="container mx-auto mt-10 mb-20 p-4">
  <section className="flex flex-col" id="project">
    <p className="text-4xl tracking-widest font-13">MY WORKS</p>
    <h6 className="font-16 text-2xl mt-4 font-semibold tracking-widest">All works</h6>

    <div className="flex flex-col md:flex-row mt-12">
      <article className="md:w-3/6 mb-8 md:mb-0">
        <div className="card">
          <figure className="pic">
            <img src="../image/shop.jpg" alt="FILM" />
            <div className="overlay">
              <p className="text-p">bookMyShow | Website</p>
            </div>
          </figure>
        </div>
      </article>

      <article className="md:w-3/6 ms-0 md:ms-20">
        <div className="card">
          <figure className="pic">
            <img src="../image/fas.png" alt="FASHION" />
            <div className="overlay">
              <p className="text-p">E-commerce | Website</p>
            </div>
          </figure>
        </div>
      </article>

      <article className="md:w-3/6 ms-0 md:ms-20">
        <div className="card">
          <figure className="pic">
            <img src="../image/blog.png" alt="BLOG" />
            <div className="overlay">
              <p className="text-p">Blog | Website</p>
            </div>
          </figure>
        </div>
      </article>
    </div>
  </section>

  <div className="flex flex-col md:flex-row mt-12">
      <article className="md:w-3/6 mb-8 md:mb-0">
        <div className="card">
          <figure className="pic">
            <img src="../image/resort-w13.jpg" alt="RESORT" />
            <div className="overlay">
              <p className="text-p">RESORT | UI/UX Design</p>
            </div>
          </figure>
        </div>
      </article>

      <article className="md:w-3/6 ms-0 md:ms-20">
        <div className="card">
          <figure className="pic">
            <img src="../image/watch.png" alt="E-COMMERCE | WATCH" />
            <div className="overlay">
              <p className="text-p">E-commerce-WATCH | UI/UX Design</p>
            </div>
          </figure>
        </div>
      </article>

      <article className="md:w-3/6 ms-0 md:ms-20">
        <div className="card">
          <figure className="pic">
            <img src="../image/travel.jpg" alt="TRAVEL" />
            <div className="overlay">
              <p className="text-p">Travel | UI/UX Design</p>
            </div>
          </figure>
        </div>
      </article>
    </div>

</div>

        </>
    )
}