import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Footer from "../sections/Footer";
import ScrollAnimation from "../../ScrollAnimation";
import { fadeInUp } from "../../animationVariants";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

import "react-toastify/dist/ReactToastify.css";
import "../NutritionForm.css";

const INITIAL_FORM_DATA = {
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
};

const NutritionForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://hospiyou-server.onrender.com/api/v1/nutrition/plan",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData(INITIAL_FORM_DATA);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollAnimation animationVariants={fadeInUp}>
      <div className="form-container">
        <Link to="/">
          <img src={Logo} alt="logo" className="log" />
        </Link>

        <h2 className="nutrition-text mb-3 font-bold text-xl md:mb-5 md:text-2xl">
          Personalized Nutrition Plan
        </h2>

        <div className="nutrition">
          <form className="gift" onSubmit={handleSubmit}>
            {/* Basic Information */}
            <h2>Basic Information</h2>
            {[
              {
                label: "Full Name",
                type: "text",
                name: "fullName",
                required: true,
              },
              {
                label: "Age",
                type: "number",
                name: "age",
                required: true,
                placeholder: "e.g. 25",
              },
              { label: "Gender", type: "text", name: "gender", required: true },
              {
                label: "Height",
                type: "text",
                name: "height",
                placeholder: "e.g. 5'9\" or 175 cm",
              },
              {
                label: "Weight",
                type: "text",
                name: "weight",
                placeholder: "e.g. 70 kg or 154 lbs",
              },
            ].map(({ label, type, name, required, placeholder }) => (
              <label key={name}>
                {label}:
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required={required}
                />
              </label>
            ))}

            {/* Contact Information */}
            <h2>Contact Information</h2>
            {[
              {
                label: "Email Address",
                type: "email",
                name: "email",
                required: true,
              },
              {
                label: "Phone Number",
                type: "text",
                name: "phoneNumber",
                required: true,
              },
            ].map(({ label, type, name, required }) => (
              <label key={name}>
                {label}:
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                />
              </label>
            ))}

            {/* Lifestyle Information */}
            <h2>Lifestyle Information</h2>
            <label>
              Activity Level:
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
              >
                <option value="">Select your activity level</option>
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
                placeholder="e.g. Software Engineer, Teacher"
                onChange={handleChange}
              />
            </label>
            <label>
              Job Physical Demand:
              <input
                type="text"
                name="jobPhysicalDemand"
                value={formData.jobPhysicalDemand}
                placeholder="e.g. Sedentary, Light, Moderate, Heavy"
                onChange={handleChange}
              />
            </label>

            {/* Dietary Preferences */}
            <h2>Dietary Preferences</h2>
            <label>
              Dietary Preferences:
              <input
                type="text"
                name="dietaryPreferences"
                value={formData.dietaryPreferences}
                placeholder="e.g. Vegetarian, Vegan, Gluten-free"
                onChange={handleChange}
              />
            </label>

            {/* Eating Habits */}
            <h2>Eating Habits</h2>
            {[
              { label: "Meals Per Day", type: "number", name: "mealsPerDay" },
              {
                label: "Snacks Frequency",
                type: "text",
                name: "snacksFrequency",
                placeholder: "e.g. 2-3 times a day",
              },
            ].map(({ label, type, name, placeholder }) => (
              <label key={name}>
                {label}:
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              </label>
            ))}

            {/* Medical Information */}
            <h2>Medical Information</h2>
            {[
              {
                label: "Medical Conditions",
                name: "medicalConditions",
                placeholder: "e.g. diabetes, hypertension, none",
              },
              {
                label: "Medications",
                name: "medications",
                placeholder: "e.g. insulin, blood pressure meds",
              },
              {
                label: "Food Allergies",
                name: "foodAllergies",
                placeholder: "e.g. nuts, dairy",
              },
              {
                label: "Family Medical History",
                name: "familyMedicalHistory",
                placeholder: "e.g. heart disease, cancer",
              },
            ].map(({ label, name, placeholder }) => (
              <label key={name}>
                {label}:
                <textarea
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                ></textarea>
              </label>
            ))}

            {/* Health and Wellness Goals */}
            <h2>Health and Wellness Goals</h2>
            <label>
              Primary Goal:
              <select
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
              >
                <option value="">Select your primary goal</option>
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
            {[
              {
                label: "Secondary Goals",
                name: "secondaryGoals",
                placeholder: "e.g. increase energy, improve digestion",
              },
              {
                label: "Timeline",
                name: "goalTimeline",
                placeholder: "e.g. 3 months, 6 months",
              },
            ].map(({ label, name, placeholder }) => (
              <label key={name}>
                {label}:
                <textarea
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                ></textarea>
              </label>
            ))}

            {/* Nutritional Information */}
            <h2>Nutritional Information</h2>
            {[
              {
                label: "Typical Diet",
                name: "typicalDiet",
                placeholder: "e.g. vegetarian, high protein",
              },
              {
                label: "Caloric Intake",
                name: "caloricIntake",
                placeholder: "e.g. 2000 kcal/day",
              },
              {
                label: "Macronutrient Distribution",
                name: "macronutrientDistribution",
                placeholder: "e.g. 40% carbs, 30% protein, 30% fats",
              },
              {
                label: "Dietary Supplements",
                name: "dietarySupplements",
                placeholder: "e.g. multivitamins, protein powder",
              },
            ].map(({ label, name, placeholder }) => (
              <label key={name}>
                {label}:
                <textarea
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                ></textarea>
              </label>
            ))}

            {/* Additional Information */}
            <h2>Additional Information</h2>
            {[
              {
                label: "Support System",
                name: "supportSystem",
                placeholder: "e.g. family, friends, support groups",
              },
              {
                label: "Motivation",
                name: "motivation",
                placeholder: "e.g. health, appearance, performance",
              },
            ].map(({ label, name, placeholder }) => (
              <label key={name}>
                {label}:
                <textarea
                  name={name}
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                ></textarea>
              </label>
            ))}
            <button type="submit" disabled={loading}>
              {loading ? (
                <ThreeDots color="#fff" height={10} width={30} />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </ScrollAnimation>
  );
};

export default NutritionForm;
