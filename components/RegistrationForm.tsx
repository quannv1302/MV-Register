import React, { useState, useEffect } from 'react';
import {
  ParentInfo,
  StudentInfo,
  RegistrationData,
  Gender,
  PackageType,
  GradeLevel
} from '../types';
import { Button } from './Button';
import {
  Check, ChevronRight, User, Phone, Mail,
  Plus, Trash2, ArrowLeft, X, BookOpen, Shapes,
  Calendar, AlertCircle, Sparkles, CheckCircle2,
  GraduationCap, Mars, Venus,
  ChevronLeft
} from 'lucide-react';

const INITIAL_PARENT: ParentInfo = {
  fullName: '',
  email: '',
  phone: '',
  dob: '',
  gender: Gender.MALE,
  country: 'Việt Nam'
};

const INITIAL_STUDENT: StudentInfo = {
  id: 'student-1',
  fullName: '',
  dob: '',
  gender: Gender.MALE,
  country: 'Việt Nam',
  packageType: undefined,
  gradeLevel: undefined
};

interface RegistrationFormProps {
  onClose?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<RegistrationData>({
    parent: INITIAL_PARENT,
    students: [INITIAL_STUDENT]
  });

  const handleParentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      parent: { ...prev.parent, [name]: value }
    }));
  };

  const handleStudentChange = (id: string, field: keyof StudentInfo, value: any) => {
    setFormData(prev => ({
      ...prev,
      students: prev.students.map(s => {
        if (s.id !== id) return s;
        if (field === 'packageType') {
          return { ...s, [field]: value, gradeLevel: undefined };
        }
        return { ...s, [field]: value };
      })
    }));
  };

  const addStudent = () => {
    const newId = `student-${Date.now()}`;
    setFormData(prev => ({
      ...prev,
      students: [...prev.students, { ...INITIAL_STUDENT, id: newId }]
    }));
  };

  const removeStudent = (id: string) => {
    if (formData.students.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      students: prev.students.filter(s => s.id !== id)
    }));
  };

  const validateStep1 = () => {
    const { fullName, email, phone, dob } = formData.parent;
    return fullName && email && phone && dob;
  };

  const validateStep2 = () => {
    return formData.students.every(s => s.fullName && s.dob && s.packageType && s.gradeLevel);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ parent: INITIAL_PARENT, students: [INITIAL_STUDENT] });
    setStep(1);
    setIsSubmitted(false);
  };

  // --- Success View ---
  if (isSubmitted) {
    return (
      <div className="bg-white p-8 md:p-12 text-center h-full min-h-[500px] flex flex-col items-center justify-center relative w-full">
        {onClose && (
          <button title="Close" onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-slate-500 transition-colors">
            <X className="w-6 h-6" />
          </button>
        )}
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-green-100 shadow-xl animate-in fade-in zoom-in-75 duration-500">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-extrabold text-brand-blue mb-4">Đăng ký thành công!</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto text-base leading-relaxed">
          Vui lòng đợi Email xác nhận từ Minh Việt.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={onClose}
            className="flex items-center gap-2 bg-brand-blue text-white hover:bg-blue-700 rounded-xl px-8 py-3 h-auto shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            <ArrowLeft size={20} />
            <span>Quay lại trang chủ</span>
          </Button>
        </div>
      </div>
    );
  }

  // --- Split Layout ---
  return (
    <div className="bg-white w-full h-full md:h-auto md:min-h-[650px] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">

      {/* LEFT PANEL - SIDEBAR */}
      <div className="w-full md:w-80 lg:w-96 bg-brand-blue/5 border-r border-brand-blue/10 p-6 md:p-8 flex flex-col justify-between shrink-0">
        <div>
          <div className="">
            <h2 className="text-2xl font-extrabold text-brand-blue leading-tight">Đăng ký học thử miễn phí</h2>
            {/* <p className="text-slate-500 text-sm">Điền thông tin để được tư vấn lộ trình học tập tốt nhất.</p> */}
          </div>

          {/* Vertical Stepper */}
          <div className="space-y-6 relative hidden md:block">
            {/* Connector Lines */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200 z-0"></div>

            <StepItem
              number={1}
              title="Thông tin phụ huynh"
              desc="Để liên hệ tư vấn"
              active={step === 1}
              done={step > 1}
              onClick={() => setStep(1)}
            />
            <StepItem
              number={2}
              title="Thông tin học sinh"
              desc="Hồ sơ bé nhập học"
              active={step === 2}
              done={step > 2}
              onClick={() => validateStep1() && setStep(2)}
            />
            <StepItem
              number={3}
              title="Xác nhận"
              desc="Kiểm tra & Gửi"
              active={step === 3}
              done={step > 3}
              onClick={() => validateStep1() && validateStep2() && setStep(3)}
            />
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 pt-8 border-t border-brand-blue/10 hidden md:block">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Hỗ trợ trực tuyến</p>
          <div className="flex items-center gap-3 text-sm text-slate-600 mb-2">
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>1900.XXXX</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Mail className="w-4 h-4 text-brand-orange" />
            <span>mvhelp@mv.edu.vn</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - MAIN CONTENT */}
      <div className="flex-1 flex flex-col relative bg-white">

        {/* Close Button Mobile - Absolute */}
        {onClose && (
          <button title="Close"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-visible md:overflow-y-auto p-6 md:p-10 scrollbar-hide">
          <div className="max-w-xl mx-auto pt-2">

            {step === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                <div className="mb-8">
                  <h3 className="text-xl py-2 font-bold text-slate-800">Thông tin phụ huynh</h3>
                  <p className="text-slate-400 text-sm">Vui lòng cung cấp thông tin chính xác để nhà trường liên hệ.</p>
                </div>

                <div className="space-y-6">
                  <FloatingInput
                    label="Họ và tên"
                    required={true}
                    value={formData.parent.fullName}
                    onChange={handleParentChange}
                    name="fullName"
                    placeholder="Nhập tên phụ huynh"
                    autoFocus
                  />
                  <FloatingInput
                    label="Email"
                    required={true}
                    type="email"
                    value={formData.parent.email}
                    onChange={handleParentChange}
                    name="email"
                    placeholder="Nhập địa chỉ email"
                  />
                  <FloatingInput
                    label="Số điện thoại"
                    required={true}
                    type="tel"
                    value={formData.parent.phone}
                    onChange={handleParentChange}
                    name="phone"
                    placeholder="Nhập số điện thoại"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FloatingInput
                      label="Ngày sinh"
                      required={true}
                      type="date"
                      value={formData.parent.dob}
                      onChange={handleParentChange}
                      name="dob"
                    />
                    <FloatingSelect
                      label="Giới tính"
                      required={true}
                      value={formData.parent.gender}
                      onChange={handleParentChange}
                      name="gender"
                      options={Object.values(Gender)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Thông tin học sinh</h3>
                    <p className="text-slate-400 text-sm text-regular">Vui lòng nhập chính xác thông tin để nhà trường liên hệ</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {formData.students.map((student, index) => (
                    <StudentFormCard
                      key={student.id}
                      student={student}
                      index={index}
                      total={formData.students.length}
                      onChange={handleStudentChange}
                      onRemove={() => removeStudent(student.id)}
                    />
                  ))}

                  <button
                    onClick={addStudent}
                    className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-brand-blue font-medium hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                    Thêm học sinh khác
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Kiểm tra thông tin</h3>
                  <p className="text-slate-400 text-sm">Vui lòng xác nhận lại thông tin trước khi gửi.</p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-6">
                  {/* Parent Review */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-brand-orange uppercase mb-3">
                      <User className="w-4 h-4" /> Phụ huynh
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6 text-sm">
                      <div>
                        <span className="block text-slate-400 text-sm">Họ tên:</span>
                        <span className="font-semibold text-md text-slate-900">{formData.parent.fullName}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400 text-sm">Số điện thoại:</span>
                        <span className="font-semibold text-md text-slate-900">{formData.parent.phone}</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="block text-slate-400 text-sm">Email:</span>
                        <span className="font-semibold text-md text-slate-900">{formData.parent.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200"></div>

                  {/* Students Review */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-brand-blue uppercase mb-3">
                      <GraduationCap className="w-4 h-4" /> Học sinh <div className="flex items-center justify-center w-6 h-6 bg-brand-blue text-white text-[10px] font-bold rounded-full shadow-sm">
                        {formData.students.length}
                      </div>
                    </h4>
                    <div className="space-y-3">
                      {formData.students.map((s, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="font-bold text-lg text-slate-800">{s.fullName}</div>
                              <div className="text-sm text-slate-500 flex items-center gap-4 mt-1">
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {s.dob ? new Intl.DateTimeFormat('en-GB').format(new Date(s.dob)) : '---'}
                                </div>
                                <div className="flex items-center gap-1.5">
                                  {s.gender === Gender.MALE ? <Mars className="w-3.5 h-3.5 text-blue-500" /> : <Venus className="w-3.5 h-3.5 text-pink-500" />}
                                  <span>{s.gender}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded text-slate-500">
                              Học sinh #{idx + 1}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                              <span className="block text-xs text-slate-500 mb-1">Chương trình</span>
                              <span className="block text-sm font-bold text-brand-blue">
                                {s.packageType === 'MVK' ? 'MVK (Mầm non)' : 'MVA (Tiểu học)'}
                              </span>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                              <span className="block text-xs text-slate-500 mb-1">Lớp đăng ký</span>
                              <span className="block text-sm font-bold text-brand-orange">{s.gradeLevel}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions Panel */}
        <div className="sticky bottom-0 p-4 md:p-6 border-t border-slate-100 bg-white flex items-center justify-between gap-4 z-20">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-100 text-slate-600 font-semibold hover:bg-slate-200 transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
              <span>Quay lại</span>
            </button>
          ) : (
            <div></div> // Spacer
          )}

          <button
            onClick={() => {
              if (step === 1 && validateStep1()) setStep(2);
              else if (step === 1) alert("Vui lòng nhập đầy đủ thông tin phụ huynh");

              if (step === 2 && validateStep2()) setStep(3);
              else if (step === 2) alert("Vui lòng hoàn tất thông tin cho tất cả học sinh");

              if (step === 3) handleSubmit();
            }}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-blue text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
          >
            {step === 3 ? "Đăng ký" : "Tiếp tục"}
            {step < 3 && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </div>
  );
};


// --- New Child Components ---

const StepItem = ({ number, title, desc, active, done, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={`relative z-10 flex items-center gap-4 cursor-pointer group ${!active && !done ? 'opacity-50 hover:opacity-100' : ''}`}
    >
      <div className={`
             w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300
             ${active
          ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-blue-200 scale-110'
          : done
            ? 'bg-green-500 border-green-500 text-white'
            : 'bg-white border-slate-300 text-slate-400 group-hover:border-slate-400'
        }
         `}>
        {done ? <Check className="w-4 h-4" /> : <span className="text-sm font-bold">{number}</span>}
      </div>
      <div className="pt-1">
        <h4 className={`text-sm font-bold mb-0.5 transition-colors ${active ? 'text-brand-blue' : done ? 'text-green-600' : 'text-slate-500'}`}>
          {title}
        </h4>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
    </div>
  )
}

const StudentFormCard = ({ student, index, total, onChange, onRemove }: any) => {
  return (
    <div className="relative p-5 md:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
      {total > 1 && (
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">Học sinh #{index + 1}</span>
          <button title="Remove" onClick={onRemove} className="text-slate-400 hover:text-red-500 transition-colors p-1">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="space-y-6">
        <FloatingInput
          label="Họ và tên"
          required={true}
          value={student.fullName}
          onChange={(e) => onChange(student.id, 'fullName', e.target.value)}
          placeholder="Nhập họ và tên học sinh"
        />

        <div className="grid grid-cols-2 gap-4">
          <FloatingInput
            label="Ngày sinh"
            required={true}
            type="date"
            value={student.dob}
            onChange={(e) => onChange(student.id, 'dob', e.target.value)}
          />
          <FloatingSelect
            label="Giới tính"
            required={true}
            value={student.gender}
            onChange={(e) => onChange(student.id, 'gender', e.target.value)}
            options={Object.values(Gender)}
          />
        </div>

        <div className="pt-2">
          <label className="text-sm font-semibold text-brand-orange uppercase mb-2 block">Chương trình học<span className="text-red-500 pl-1 font-bold">*</span></label>
          <div className="grid grid-cols-2 gap-3">
            <RadioCard
              title="MVK"
              subtitle="Mầm non"
              active={student.packageType === PackageType.MVK}
              onClick={() => onChange(student.id, 'packageType', PackageType.MVK)}
            />
            <RadioCard
              title="MVA"
              subtitle="Tiểu học"
              active={student.packageType === PackageType.MVA}
              onClick={() => onChange(student.id, 'packageType', PackageType.MVA)}
            />
          </div>
        </div>

        {student.packageType && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <label className="text-xs font-semibold text-slate-900 uppercase mb-2 block">Lớp đăng ký <span className="text-red-500 font-bold">*</span></label>
            <div className="flex flex-wrap gap-2">
              {student.packageType === PackageType.MVK && (
                <GradePill
                  label="Lớp Pre-K (lớp mầm non)"
                  active={student.gradeLevel === GradeLevel.PRE_K}
                  onClick={() => onChange(student.id, 'gradeLevel', GradeLevel.PRE_K)}
                />
              )}
              {student.packageType === PackageType.MVA && (
                <>
                  <GradePill
                    label="K (lớp mẫu giáo)"
                    active={student.gradeLevel === GradeLevel.K}
                    onClick={() => onChange(student.id, 'gradeLevel', GradeLevel.K)}
                  />
                  <GradePill
                    label="Lớp 1"
                    active={student.gradeLevel === GradeLevel.GRADE_1}
                    onClick={() => onChange(student.id, 'gradeLevel', GradeLevel.GRADE_1)}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const FloatingInput = ({ label, required, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string, required?: boolean }) => (
  <div className="relative group">
    <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-slate-500 font-regular group-focus-within:text-brand-blue transition-colors z-10 flex items-center">
      {label}
      {required && <span className="text-red-500 ml-1 font-bold">*</span>}
    </label>
    <input
      {...props}
      required={required}
      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-slate-700 placeholder:text-slate-400 bg-white"
    />
  </div>
);

const FloatingSelect = ({
  label,
  options,
  required, // Thêm prop required
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string, options: string[], required?: boolean }) => (
  <div className="relative group">
    <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-slate-500 font-regular group-focus-within:text-brand-blue transition-colors z-10 flex items-center">
      {label}
      {required && <span className="text-red-500 ml-1 font-bold">*</span>}
    </label>
    <select
      {...props}
      required={required} // Truyền vào thẻ select để trình duyệt hiểu đây là trường bắt buộc
      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-slate-700 bg-white appearance-none cursor-pointer"
    >
      {/* Thêm một option trống mặc định nếu cần */}
      <option value="" disabled hidden>Chọn {label.toLowerCase()}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
      <ChevronRight className="w-4 h-4 rotate-90" />
    </div>
  </div>
);

const RadioCard = ({ title, subtitle, active, onClick }: { title: string, subtitle: string, active: boolean, onClick: () => void }) => (
  <div
    onClick={onClick}
    className={`
         cursor-pointer relative p-3 rounded-xl border-2 transition-all text-center
         ${active
        ? 'border-brand-blue bg-blue-50/50 text-brand-blue'
        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'
      }
      `}
  >
    <div className="text-lg font-bold">{title}</div>
    <div className="text-xs opacity-70">{subtitle}</div>
    {active && (
      <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-0.5 shadow-sm">
        <Check size={14} strokeWidth={4} />
      </div>
    )}
  </div>
)

const GradePill = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`
         px-4 py-2 rounded-lg text-sm font-medium border transition-all
         ${active
        ? 'bg-brand-blue border-brand-blue text-white shadow-md'
        : 'bg-white border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
      }
      `}
  >
    {label}
  </button>
)
