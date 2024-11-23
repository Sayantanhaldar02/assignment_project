import React from 'react'
import photo from "../assets/photo-collage.png.png"
const About = () => {
    return (
        <>
            <section className="bg-white p-4">
                <h1 className="text-[40px] text-center font-bold mb-4">About Us</h1>
                <div className='flex w-[80%] mx-auto items-center justify-center gap-6'>
                    <p className="text-lg mb-4">
                        "Education gives the deepest insight, search for truth the highest form of Worship, passion ends in endless miseries, scarifies and renunciation bring eternal bliss."

                        -The Mahabharata

                        Vishal Bharti Senior Secondary School, a premier educational institution, was established in 1989.

                        Vishal Bharti Sr. Sec. School is a new wave Progressive school with the vision and aspiration of the new millennium enriched by the wisdom of great thinkers and educators like Tagore and Vivekananda and the dreams of scientist and educator Stephen Hawkings. Achieving excellence through human values is the goal of this School. The school is a unique experiment and honest endeavor aiming at man-making education for building a dynamic society by developing the personality of the child towards fullness. It is by helping the child in the manifestation of the perfection already existing in the child and by creating an environment where the child can recognize "the angle of surplus" that he is. Integral Education for fullness is ensured by developing his physical, intellectual, emotional and spiritual qualities in a balanced form, so that the child can blossom as a multi lotus in its pristine glory under the ever-purifying, constantly ever rising Sun. The manifestation of the perfection already existing in the child-the blossoming of the "Integral", i.e. his physical, intellectual, emotional and spiritual faculties.
                    </p>
                    <img src={photo} alt="" className='w-[30%]' />
                </div>
            </section>
        </>
    )
}

export default About