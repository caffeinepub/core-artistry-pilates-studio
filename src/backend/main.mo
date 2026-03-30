import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type ClassType = {
    #refomer;
    #mat;
    #privateSession;
  };

  type ClassStatus = {
    #booked;
    #waitlisted;
    #bookingClosed;
    #fullyBooked;
  };

  type Instructor = {
    id : Text;
    name : Text;
    bio : Text;
    specialties : [ClassType];
  };

  type Testimonial = {
    author : Text;
    content : Text;
    rating : Nat;
    timestamp : Time.Time;
  };

  type ContactFormSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type PrivateSessionRequest = {
    name : Text;
    contactMethod : Text;
    preferredTime : Text;
    preferredDays : [Text];
    instructorPreference : ?Text;
    submittedAt : Time.Time;
  };

  type UserPackage = {
    remainingCredits : Nat;
    expiresAt : Time.Time;
  };

  type ClassBooking = {
    user : Principal;
    classId : Text;
    status : ClassStatus;
    bookedAt : Time.Time;
  };

  type PilatesClass = {
    id : Text;
    classType : ClassType;
    instructor : Text;
    startTime : Time.Time;
    durationMinutes : Nat;
    capacity : Nat;
    spotsLeft : Nat;
    status : ClassStatus;
  };

  module PilatesClass {
    public func compare(a : PilatesClass, b : PilatesClass) : Order.Order {
      Text.compare(a.id, b.id);
    };
  };

  let classes = Map.empty<Text, PilatesClass>();
  let instructors = Map.empty<Text, Instructor>();
  let testimonials = Map.empty<Text, Testimonial>();
  let contactForms = Map.empty<Text, ContactFormSubmission>();
  let privateSessionRequests = Map.empty<Text, PrivateSessionRequest>();
  let userPackages = Map.empty<Principal, UserPackage>();
  let userBookings = Map.empty<Principal, Map.Map<Text, ClassBooking>>();

  // INSTRUCTORS
  public query func getAllInstructors() : async [Instructor] {
    instructors.values().toArray();
  };

  public shared ({ caller }) func addInstructor(instructor : Instructor) : async () {
    if (instructors.containsKey(instructor.id)) {
      Runtime.trap("Instructor already exists!");
    };
    instructors.add(instructor.id, instructor);
  };

  // CLASSES
  public query func getClassSchedule() : async [PilatesClass] {
    classes.values().toArray().sort();
  };

  public shared ({ caller }) func addClass(pilatesClass : PilatesClass) : async () {
    if (classes.containsKey(pilatesClass.id)) {
      Runtime.trap("Class already exists!");
    };
    classes.add(pilatesClass.id, pilatesClass);
  };

  // TESTIMONIALS
  public query func getTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public shared ({ caller }) func submitTestimonial(testimonial : Testimonial) : async () {
    testimonials.add(testimonial.author, testimonial);
  };

  // CONTACT FORMS
  public query ({ caller }) func getContactForms() : async [ContactFormSubmission] {
    contactForms.values().toArray();
  };

  public shared ({ caller }) func submitContactForm(form : ContactFormSubmission) : async () {
    contactForms.add(form.email, form);
  };

  // PRIVATE SESSION REQUESTS
  public query ({ caller }) func getPrivateSessionRequests() : async [PrivateSessionRequest] {
    privateSessionRequests.values().toArray();
  };

  public shared ({ caller }) func submitPrivateSessionRequest(request : PrivateSessionRequest) : async () {
    privateSessionRequests.add(request.name, request);
  };

  // USER PACKAGES
  public query ({ caller }) func getUserPackage(user : Principal) : async ?UserPackage {
    userPackages.get(user);
  };

  // BOOKINGS
  public query ({ caller }) func getUserBookings() : async [ClassBooking] {
    switch (userBookings.get(caller)) {
      case (null) { [] };
      case (?bookings) { bookings.values().toArray() };
    };
  };

  public shared ({ caller }) func bookClass(classId : Text) : async ClassStatus {
    let pilatesClass = switch (classes.get(classId)) {
      case (null) { Runtime.trap("Class not found") };
      case (?klass) { klass };
    };

    if (pilatesClass.spotsLeft == 0) {
      return #fullyBooked;
    };

    let booking : ClassBooking = {
      user = caller;
      classId;
      status = #booked;
      bookedAt = Time.now();
    };

    let updatedBookings = switch (userBookings.get(caller)) {
      case (?existingBookings) {
        existingBookings.add(classId, booking);
        existingBookings;
      };
      case (null) {
        let newBookings = Map.empty<Text, ClassBooking>();
        newBookings.add(classId, booking);
        newBookings;
      };
    };

    userBookings.add(caller, updatedBookings);

    let updatedClass : PilatesClass = {
      id = pilatesClass.id;
      classType = pilatesClass.classType;
      instructor = pilatesClass.instructor;
      startTime = pilatesClass.startTime;
      durationMinutes = pilatesClass.durationMinutes;
      capacity = pilatesClass.capacity;
      spotsLeft = pilatesClass.spotsLeft - 1;
      status = pilatesClass.status;
    };
    classes.add(classId, updatedClass);

    #booked;
  };
};
