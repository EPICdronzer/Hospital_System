import SubHeader from "../../components/sub-header";
import Link from "next/link";
import {
  FaFacebookF, FaPinterestP, FaTwitter, FaInstagram,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaCalendarAlt, FaStar, FaCheckCircle, FaAward, FaUserMd,
} from "react-icons/fa";

const CACHE_BUSTER = typeof Date !== "undefined" ? Date.now() : "";

const DOCTORS_DATA = {
  "jayesh-vyas": {
    name: "Dr. Jayesh Vyas",
    specialty: "हृदय रोग विशेषज्ञ | Cardiologist",
    degree: "MBBS, MD (Cardiology), FESC",
    experience: "14 Years",
    patients: "2,400+",
    rating: "4.9",
    img: "/dr_jayesh_vyas.png",
    phone: "+91 99695 69535",
    email: "jayesh.vyas@medilo.com",
    location: "Block A, 2nd Floor",
    bio: "डॉ. जयेश व्यास भारत के एक प्रसिद्ध हृदय रोग विशेषज्ञ हैं, जिन्हें जटिल हृदय रोगों के इलाज में 14 वर्षों से अधिक का अनुभव है। वह इंटरवेंशनल कार्डियोलॉजी और प्रिवेंटिव हार्ट केयर के विशेषज्ञ हैं। | Dr. Jayesh Vyas is a renowned cardiologist in India with over 14 years of experience. He specializes in interventional cardiology, heart failure management, and preventive heart care.",
    expertise: ["Interventional Cardiology", "Heart Failure Management", "Echocardiography", "Preventive Cardiology", "Cardiac Rehabilitation"],
    schedule: { Mon: "09:00–13:00", Tue: "10:00–14:00", Wed: "Off", Thu: "09:00–13:00", Fri: "08:00–12:00", Sat: "10:00–13:00", Sun: "Off" },
  },
  "sandeep-banerjee": {
    name: "Dr. Sandeep Banerjee",
    specialty: "सामान्य चिकित्सक | General Physician",
    degree: "MBBS, MD (Internal Medicine)",
    experience: "11 Years",
    patients: "5,100+",
    rating: "4.8",
    img: "/dr_sandeep_banerjee.png",
    phone: "+91 99695 69536",
    email: "sandeep.banerjee@medilo.com",
    location: "Block B, Ground Floor",
    bio: "डॉ. संदीप बनर्जी एक अत्यधिक सम्मानित सामान्य चिकित्सक हैं जो अपनी सटीक नैदानिक क्षमता और समग्र रोगी देखभाल के लिए जाने जाते हैं। | Dr. Sandeep Banerjee is a highly respected general physician in India, known for his diagnostic accuracy and comprehensive patient care.",
    expertise: ["General Medicine", "Diabetes Management", "Hypertension", "Preventive Health", "Geriatric Care"],
    schedule: { Mon: "08:00–12:00", Tue: "Off", Wed: "09:00–14:00", Thu: "09:00–13:00", Fri: "10:00–14:00", Sat: "Off", Sun: "09:00–12:00" },
  },
  "nirmala-patel": {
    name: "Dr. Nirmala Patel",
    specialty: "तंत्रिका रोग विशेषज्ञ | Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "12 Years",
    patients: "1,800+",
    rating: "4.9",
    img: "/dr_nirmala_patel.png",
    phone: "+91 99695 69537",
    email: "nirmala.patel@medilo.com",
    location: "Block A, 3rd Floor",
    bio: "डॉ. निर्मला पटेल एक प्रख्यात तंत्रिका रोग विशेषज्ञ हैं, जिन्हें मिर्गी, स्ट्रोक प्रबंधन और न्यूरोलॉजिकल विकारों का व्यापक अनुभव है। उन्होंने बैंगलोर के प्रतिष्ठित निमहंस (NIMHANS) से प्रशिक्षण प्राप्त किया है। | Dr. Nirmala Patel is a distinguished neurologist in India, specializing in epilepsy, stroke management, and neurodegenerative disorders. She completed her advanced training at NIMHANS, Bangalore.",
    expertise: ["Epilepsy & Seizures", "Stroke Management", "Parkinson's Disease", "Multiple Sclerosis", "Headache & Migraine"],
    schedule: { Mon: "11:00–15:00", Tue: "09:00–13:00", Wed: "10:00–14:00", Thu: "Off", Fri: "09:00–12:00", Sat: "10:00–13:00", Sun: "Off" },
  },
  "rahul-choudhury": {
    name: "Dr. Rahul Choudhury",
    specialty: "हड्डी रोग विशेषज्ञ | Orthopedic Surgeon",
    degree: "MBBS, MS (Orthopaedics)",
    experience: "16 Years",
    patients: "3,200+",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    phone: "+91 99695 69538",
    email: "rahul.choudhury@medilo.com",
    location: "Surgical Wing, 1st Floor",
    bio: "डॉ. राहुल चौधरी 16 वर्षों के सर्जिकल अनुभव के साथ एक अनुभवी हड्डी रोग विशेषज्ञ हैं। वह जॉइंट रिप्लेसमेंट सर्जरी, खेल चोटों और रीढ़ की हड्डी के विकारों के विशेषज्ञ हैं। | Dr. Rahul Choudhury is a veteran orthopedic surgeon with 16 years of surgical excellence. He specializes in joint replacement surgeries, sports injuries, and spinal disorders.",
    expertise: ["Knee & Hip Replacement", "Arthroscopic Surgery", "Sports Injuries", "Spinal Disorders", "Fracture Management"],
    schedule: { Mon: "Off", Tue: "10:00–14:00", Wed: "09:00–13:00", Thu: "08:00–12:00", Fri: "Off", Sat: "09:00–13:00", Sun: "10:00–13:00" },
  },
  "aisha-khan": {
    name: "Dr. Aisha Khan",
    specialty: "त्वचा रोग विशेषज्ञ | Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "9 Years",
    patients: "4,600+",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    phone: "+91 99695 69539",
    email: "aisha.khan@medilo.com",
    location: "Block C, 2nd Floor",
    bio: "डॉ. आयशा खान त्वचा और सौंदर्य संबंधी विकारों की विशेषज्ञ चिकित्सक हैं। वह चिकित्सकीय उपचार के साथ-साथ उन्नत कॉस्मेटिक प्रक्रियाओं की भी विशेषज्ञ हैं। | Dr. Aisha Khan is an expert dermatologist who blends clinical dermatology with advanced aesthetic procedures for skin, hair, and nail health.",
    expertise: ["Acne & Eczema", "Psoriasis Treatment", "Skin Allergy", "Hair Loss", "Cosmetic Dermatology"],
    schedule: { Mon: "09:00–13:00", Tue: "10:00–14:00", Wed: "Off", Thu: "09:00–13:00", Fri: "10:00–14:00", Sat: "Off", Sun: "Off" },
  },
  "madhavan-nair": {
    name: "Dr. Madhavan Nair",
    specialty: "कैंसर रोग विशेषज्ञ | Oncologist",
    degree: "MBBS, MD, DM (Oncology)",
    experience: "18 Years",
    patients: "1,400+",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    phone: "+91 99695 69540",
    email: "madhavan.nair@medilo.com",
    location: "Oncology Wing, 4th Floor",
    bio: "डॉ. माधवन नायर कैंसर देखभाल, कीमोथेरेपी और लक्षित चिकित्सा (Targeted Therapy) में 18 वर्षों से अधिक का अनुभव रखने वाले भारत के अग्रणी ऑन्कोलॉजिस्ट हैं। | Dr. Madhavan Nair is a leading oncologist in India with over 18 years of dedication to cancer care, chemotherapy protocols, and immunotherapy.",
    expertise: ["Medical Oncology", "Chemotherapy", "Targeted Therapy", "Immunotherapy", "Cancer Screening"],
    schedule: { Mon: "10:00–15:00", Tue: "Off", Wed: "10:00–14:00", Thu: "Off", Fri: "09:00–13:00", Sat: "09:00–12:00", Sun: "Off" },
  },
  "priya-sharma": {
    name: "Dr. Priya Sharma",
    specialty: "स्त्री रोग विशेषज्ञ | Gynecologist",
    degree: "MBBS, MS (Obs & Gynae)",
    experience: "13 Years",
    patients: "6,200+",
    rating: "4.9",
    img: "/dr_priya_sharma.png",
    phone: "+91 99695 69541",
    email: "priya.sharma@medilo.com",
    location: "Maternity Block, 2nd Floor",
    bio: "डॉ. प्रिया शर्मा स्त्री रोग और प्रसूति विज्ञान की विशेषज्ञ हैं, जो उच्च जोखिम वाली गर्भावस्था और पीसीओएस (PCOS) प्रबंधन में 13 वर्षों का अनुभव रखती हैं। | Dr. Priya Sharma is a highly experienced obstetrician and gynecologist specializing in high-risk pregnancies, laparoscopic surgeries, and women's wellness.",
    expertise: ["High-Risk Pregnancy", "Laparoscopic Surgery", "PCOS Management", "Menopause Care", "Infertility Treatment"],
    schedule: { Mon: "08:00–12:00", Tue: "09:00–13:00", Wed: "10:00–14:00", Thu: "09:00–13:00", Fri: "Off", Sat: "Off", Sun: "09:00–12:00" },
  },
  "devendra-lal": {
    name: "Dr. Devendra Lal",
    specialty: "मनोचिकित्सक | Psychiatrist",
    degree: "MBBS, MD (Psychiatry)",
    experience: "10 Years",
    patients: "2,900+",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80",
    phone: "+91 99695 69542",
    email: "devendra.lal@medilo.com",
    location: "Block D, 3rd Floor",
    bio: "डॉ. देवेंद्र लाल एक संवेदनशील मनोचिकित्सक हैं जो अवसाद, तनाव, चिंता और मानसिक स्वास्थ्य विकारों के प्रबंधन में एक दशक का अनुभव रखते हैं। | Dr. Devendra Lal is a compassionate psychiatrist with a decade of clinical experience in managing anxiety, depression, and holistic mental wellness.",
    expertise: ["Depression & Anxiety", "OCD & Phobias", "Psychosis", "Addiction Medicine", "Child & Adolescent Psychiatry"],
    schedule: { Mon: "Off", Tue: "10:00–14:00", Wed: "09:00–13:00", Thu: "10:00–15:00", Fri: "09:00–13:00", Sat: "10:00–13:00", Sun: "Off" },
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const doc = DOCTORS_DATA[resolvedParams.id] || DOCTORS_DATA["jayesh-vyas"];
  if (!doc) return { title: "Doctor – Medilo Healthcare" };
  return {
    title: `${doc.name} – ${doc.specialty} | Medilo Healthcare`,
    description: `Book an appointment with ${doc.name}, ${doc.specialty} at Medilo Healthcare. ${doc.experience} of experience.`,
  };
}

export default async function DoctorDetailPage({ params }) {
  const resolvedParams = await params;
  const doc = DOCTORS_DATA[resolvedParams.id] || DOCTORS_DATA["jayesh-vyas"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const imgSrc = doc.img.startsWith("/") ? `${doc.img}?v=${CACHE_BUSTER}` : doc.img;

  return (
    <main style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <SubHeader title={doc.name} currentPage={`Doctors / ${doc.name}`} />

      <section style={{ backgroundColor: "#f8fafc", padding: "72px 0 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* Top 2-column layout */}
          <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 40, marginBottom: 48 }}>

            {/* LEFT: Profile Card */}
            <div>
              {/* Photo */}
              <div style={{ borderRadius: 8, overflow: "hidden", height: 380, marginBottom: 0, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
                <img src={imgSrc} alt={doc.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>

              {/* Social & Contact Card */}
              <div style={{ backgroundColor: "#0d1b4b", padding: "28px 24px", borderRadius: "0 0 8px 8px" }}>
                <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: 18, margin: "0 0 4px" }}>{doc.name}</h3>
                <p style={{ color: "#60a5fa", fontSize: 12.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 18px" }}>
                  {doc.specialty}
                </p>

                {/* Socials */}
                <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                  {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map((Icon, i) => (
                    <a key={i} href="#" style={{
                      width: 34, height: 34, borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#ffffff", textDecoration: "none", fontSize: 13,
                      transition: "background 0.2s",
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2783e3"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>

                {/* Contact info */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { Icon: FaPhone, label: doc.phone, href: `tel:${doc.phone}` },
                    { Icon: FaEnvelope, label: doc.email, href: `mailto:${doc.email}` },
                    { Icon: FaMapMarkerAlt, label: doc.location, href: "#" },
                  ].map(({ Icon, label, href }) => (
                    <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", backgroundColor: "#2783e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ color: "#ffffff", fontSize: 12 }} />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Bio & Details */}
            <div>
              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
                {[
                  { label: "Experience", value: doc.experience, Icon: FaAward },
                  { label: "Patients", value: doc.patients, Icon: FaUserMd },
                  { label: "Rating", value: `${doc.rating}/5.0`, Icon: FaStar },
                ].map(({ label, value, Icon }) => (
                  <div key={label} style={{
                    backgroundColor: "#ffffff",
                    padding: "20px 16px",
                    borderRadius: 8,
                    textAlign: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #e2e8f0",
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                      <Icon style={{ color: "#2783e3", fontSize: 18 }} />
                    </div>
                    <p style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{value}</p>
                    <p style={{ color: "#6b7280", fontSize: 11.5, margin: 0, fontWeight: 600 }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* Degree */}
              <div style={{ marginBottom: 20 }}>
                <span style={{ backgroundColor: "#eff6ff", color: "#2783e3", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 20, letterSpacing: "0.05em" }}>
                  {doc.degree}
                </span>
              </div>

              {/* Bio */}
              <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 26, margin: "0 0 14px" }}>
                About Dr. {doc.name.split(" ").slice(1).join(" ")}
              </h2>
              <p style={{ color: "#6b7280", fontSize: 14.5, lineHeight: 1.8, margin: "0 0 28px" }}>
                {doc.bio}
              </p>

              {/* Expertise */}
              <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>
                Areas of Expertise
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                {doc.expertise.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "8px 16px", borderRadius: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    <FaCheckCircle style={{ color: "#2783e3", fontSize: 13, flexShrink: 0 }} />
                    <span style={{ color: "#0d1b4b", fontWeight: 600, fontSize: 13 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Book Appointment CTA */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  backgroundColor: "#2783e3", color: "#ffffff",
                  padding: "13px 32px", borderRadius: 24,
                  fontWeight: 700, fontSize: 14, textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(39,131,227,0.35)",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1a6fd0"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2783e3"}
                >
                  <FaCalendarAlt style={{ fontSize: 13 }} />
                  Book Appointment
                </Link>
                <Link href="/timetable" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  backgroundColor: "#ffffff", color: "#0d1b4b",
                  padding: "13px 32px", borderRadius: 24,
                  fontWeight: 700, fontSize: 14, textDecoration: "none",
                  border: "1.5px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2783e3"; e.currentTarget.style.color = "#2783e3"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#0d1b4b"; }}
                >
                  <FaClock style={{ fontSize: 13 }} />
                  See Timetable
                </Link>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Table */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflow: "hidden" }}>
            <div style={{ backgroundColor: "#0d1b4b", padding: "20px 32px" }}>
              <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: 20, margin: 0 }}>
                Weekly Availability Schedule
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0 }}>
              {days.map((day, i) => {
                const slot = doc.schedule[day];
                const isOff = slot === "Off";
                return (
                  <div key={day} style={{
                    padding: "20px 12px",
                    textAlign: "center",
                    borderRight: i < days.length - 1 ? "1px solid #f1f5f9" : "none",
                    borderBottom: "none",
                  }}>
                    <p style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 13, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{day}</p>
                    <div style={{
                      padding: "8px 6px",
                      borderRadius: 6,
                      backgroundColor: isOff ? "#f3f4f6" : "#eff6ff",
                    }}>
                      <FaClock style={{ color: isOff ? "#9ca3af" : "#2783e3", fontSize: 14, marginBottom: 6, display: "block", margin: "0 auto 6px" }} />
                      <p style={{ color: isOff ? "#9ca3af" : "#0d1b4b", fontWeight: 600, fontSize: 11.5, margin: 0, lineHeight: 1.4 }}>
                        {isOff ? "Day Off" : slot}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Other Doctors */}
          <div style={{ marginTop: 64 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h3 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 28, margin: "0 0 8px" }}>
                Meet Other Specialists
              </h3>
              <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
                Explore our full team of expert doctors
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              {Object.entries(DOCTORS_DATA)
                .filter(([id]) => id !== resolvedParams.id)
                .slice(0, 4)
                .map(([id, d]) => {
                  const otherImgSrc = d.img.startsWith("/") ? `${d.img}?v=${CACHE_BUSTER}` : d.img;
                  return (
                    <Link key={id} href={`/doctor/${id}`} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      backgroundColor: "#ffffff", padding: "12px 20px",
                      borderRadius: 8, textDecoration: "none",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                      border: "1px solid #e2e8f0",
                      transition: "all 0.2s",
                      minWidth: 200,
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2783e3"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(39,131,227,0.15)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)"; }}
                    >
                      <img src={otherImgSrc} alt={d.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", objectPosition: "top", flexShrink: 0 }} />
                      <div>
                        <p style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 13.5, margin: "0 0 2px" }}>{d.name}</p>
                        <p style={{ color: "#2783e3", fontSize: 11.5, fontWeight: 600, margin: 0 }}>{d.specialty}</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
