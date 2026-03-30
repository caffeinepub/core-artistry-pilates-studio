import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Instructor {
    id: string;
    bio: string;
    name: string;
    specialties: Array<ClassType>;
}
export type Time = bigint;
export interface PrivateSessionRequest {
    contactMethod: string;
    name: string;
    submittedAt: Time;
    preferredDays: Array<string>;
    preferredTime: string;
    instructorPreference?: string;
}
export interface PilatesClass {
    id: string;
    startTime: Time;
    status: ClassStatus;
    instructor: string;
    durationMinutes: bigint;
    spotsLeft: bigint;
    capacity: bigint;
    classType: ClassType;
}
export interface ClassBooking {
    status: ClassStatus;
    bookedAt: Time;
    user: Principal;
    classId: string;
}
export interface UserPackage {
    expiresAt: Time;
    remainingCredits: bigint;
}
export interface Testimonial {
    content: string;
    author: string;
    timestamp: Time;
    rating: bigint;
}
export enum ClassStatus {
    booked = "booked",
    bookingClosed = "bookingClosed",
    waitlisted = "waitlisted",
    fullyBooked = "fullyBooked"
}
export enum ClassType {
    mat = "mat",
    refomer = "refomer",
    privateSession = "privateSession"
}
export interface backendInterface {
    addClass(pilatesClass: PilatesClass): Promise<void>;
    addInstructor(instructor: Instructor): Promise<void>;
    bookClass(classId: string): Promise<ClassStatus>;
    getAllInstructors(): Promise<Array<Instructor>>;
    getClassSchedule(): Promise<Array<PilatesClass>>;
    getContactForms(): Promise<Array<ContactFormSubmission>>;
    getPrivateSessionRequests(): Promise<Array<PrivateSessionRequest>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    getUserBookings(): Promise<Array<ClassBooking>>;
    getUserPackage(user: Principal): Promise<UserPackage | null>;
    submitContactForm(form: ContactFormSubmission): Promise<void>;
    submitPrivateSessionRequest(request: PrivateSessionRequest): Promise<void>;
    submitTestimonial(testimonial: Testimonial): Promise<void>;
}
