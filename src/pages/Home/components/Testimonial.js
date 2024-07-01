export const Testimonials = () => {
    return (
      <section className="my-20">
        <h1 className="text-2xl text-center font-semibold text-gray-900 dark:text-slate-100 mb-5 underline underline-offset-8">Student About CodeBook</h1>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          {/* Testimonial 1 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-color8 dark:bg-blue-900 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
              <p className="my-4 font-bold">If you care for your time, I hands down would go with this."</p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-blue-700">Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Random AI</div>
              </div>
            </figcaption>
          </figure>
  
          {/* Testimonial 2 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-color8 dark:bg-purple-900 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
              <p className="my-4 font-bold">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-purple-700">Roberta Casas</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Random</div>
              </div>
            </figcaption>
          </figure>
  
          {/* Testimonial 3 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-color8 dark:bg-green-900 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
              <p className="my-4 font-bold">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-green-700">Jese Leos</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Random</div>
              </div>
            </figcaption>
          </figure>
  
          {/* Testimonial 4 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-color8 dark:bg-yellow-900 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
              <p className="my-4 font-bold">You have many examples that can be used to create a fast prototype for your team."</p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="text-yellow-700">Joseph McFall</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Random</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    );
  };
  
