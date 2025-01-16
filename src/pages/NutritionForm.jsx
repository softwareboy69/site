import React, { useState } from "react";
import emailjs from "emailjs-com";
import Logo from "../assets/Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import ScrollAnimation from "../../ScrollAnimation";
import { fadeInUp } from "../../animationVariants";
import Footer from "../sections/Footer";
import "../NutritionForm.css";

const NutritionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    email: "",
    phoneNumber: "",
    activityLevel: "",
    occupation: "",
    jobPhysicalDemand: "",
    dietaryPreferences: "",
    mealsPerDay: "",
    snacksFrequency: "",
    medicalConditions: "",
    medications: "",
    foodAllergies: "",
    familyMedicalHistory: "",
    primaryGoal: "",
    secondaryGoals: "",
    goalTimeline: "",
    typicalDiet: "",
    caloricIntake: "",
    macronutrientDistribution: "",
    dietarySupplements: "",
    supportSystem: "",
    motivation: "",
    preferredCommunication: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_s617es9",
        "template_phb1fu2",
        formData,
        "ETL-khoewOrly233G"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          toast.success("Form submitted successfully!", {
            position: "top-right",
          });
          setFormData({
            fullName: "",
            age: "",
            gender: "",
            height: "",
            weight: "",
            email: "",
            phoneNumber: "",
            activityLevel: "",
            occupation: "",
            jobPhysicalDemand: "",
            dietaryPreferences: "",
            mealsPerDay: "",
            snacksFrequency: "",
            medicalConditions: "",
            medications: "",
            foodAllergies: "",
            familyMedicalHistory: "",
            primaryGoal: "",
            secondaryGoals: "",
            goalTimeline: "",
            typicalDiet: "",
            caloricIntake: "",
            macronutrientDistribution: "",
            dietarySupplements: "",
            supportSystem: "",
            motivation: "",
            preferredCommunication: "",
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to submit the form. Please try again.", {
            position: "top-right",
          });
          setLoading(false);
        }
      );
  };

  return (
    <ScrollAnimation animationVariants={fadeInUp}>
      <img src={Logo} alt="logo" className="log" />
      <h2 className="nutrition-text mb-3 font-bold text-xl md:mb-5 md:text-2xl">
        Personalized Nutrition Plan
      </h2>
      <div className="nutrition">
        <form className="gift" onSubmit={handleSubmit}>
          <h2>Basic Information</h2>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Height:
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight:
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </label>

          <h2>Contact Information</h2>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          {/* From here */}
          <h2>Lifestyle Information</h2>
          <label>
            Activity Level:
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
            >
              <option value="Sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="Lightly active">
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option value="Moderately active">
                Moderately active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="Very active">
                Very active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="Super active">
                Super active (very hard exercise/sports & physical job or 2x
                training)
              </option>
            </select>
          </label>
          <label>
            Occupation:
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </label>
          <label>
            Job Physical Demand:
            <input
              type="text"
              name="jobPhysicalDemand"
              value={formData.jobPhysicalDemand}
              onChange={handleChange}
            />
          </label>

          <h2>Dietary Preferences</h2>
          <label>
            Dietary Preferences:
            <input
              type="text"
              name="dietaryPreferences"
              value={formData.dietaryPreferences}
              onChange={handleChange}
            />
          </label>

          <h2>Eating Habits</h2>
          <label>
            Meals Per Day:
            <input
              type="number"
              name="mealsPerDay"
              value={formData.mealsPerDay}
              onChange={handleChange}
            />
          </label>
          <label>
            Snacks Frequency:
            <input
              type="text"
              name="snacksFrequency"
              value={formData.snacksFrequency}
              onChange={handleChange}
            />
          </label>

          <h2>Medical Information</h2>
          <label>
            Medical Conditions:
            <textarea
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Medications:
            <textarea
              name="medications"
              value={formData.medications}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Food Allergies:
            <textarea
              name="foodAllergies"
              value={formData.foodAllergies}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Family Medical History:
            <textarea
              name="familyMedicalHistory"
              value={formData.familyMedicalHistory}
              onChange={handleChange}
            ></textarea>
          </label>

          <h2>Health and Wellness Goals</h2>
          <label>
            Primary Goal:
            <select
              name="primaryGoal"
              value={formData.primaryGoal}
              onChange={handleChange}
            >
              <option value="Weight loss">Weight loss</option>
              <option value="Weight gain">Weight gain</option>
              <option value="Muscle gain">Muscle gain</option>
              <option value="Improve overall health">
                Improve overall health
              </option>
              <option value="Manage a medical condition">
                Manage a medical condition
              </option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Secondary Goals:
            <textarea
              name="secondaryGoals"
              value={formData.secondaryGoals}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Timeline:
            <textarea
              name="goalTimeline"
              value={formData.goalTimeline}
              onChange={handleChange}
            ></textarea>
          </label>

          <h2>Nutritional Information</h2>
          <label>
            Typical Diet:
            <textarea
              name="typicalDiet"
              value={formData.typicalDiet}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Caloric Intake:
            <textarea
              name="caloricIntake"
              value={formData.caloricIntake}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Macronutrient Distribution:
            <textarea
              name="macronutrientDistribution"
              value={formData.macronutrientDistribution}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Dietary Supplements:
            <textarea
              name="dietarySupplements"
              value={formData.dietarySupplements}
              onChange={handleChange}
            ></textarea>
          </label>

          <h2>Additional Information</h2>
          <label>
            Support System:
            <textarea
              name="supportSystem"
              value={formData.supportSystem}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Motivation:
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Preferred Communication:
            <select
              name="preferredCommunication"
              value={formData.preferredCommunication}
              onChange={handleChange}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="App notification">App notification</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <button type="submit" disabled={loading}>
            {loading ? (
              <ThreeDots color="#fff" height={10} width={30} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
      <Footer />
    </ScrollAnimation>
  );
};

export default NutritionForm;
