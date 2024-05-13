
import Whyus from "@/components/Whyus";
import FeaturedCourses from "../components/FeaturedCourses";
import Herosection from "../components/Herosection";
import Movingcard from "@/components/Movingcard";
import Upcomeingclasses from "@/components/Upcomeingclasses";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <div>
   <Herosection/>
   <FeaturedCourses/>
   <Whyus/>
   <Movingcard/>
<Upcomeingclasses/>
<Instructor/>
<Footer/>
   </div>

  );
}
