import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { CheckCircle2, X } from 'lucide-react';

export interface ProgramDetailData {
    id: string;
    title: string;
    subtitle: string;
    ageRange: string;
    description: string;
    highlights: string[];
    curriculum: string[];
    schedule: string;
}

interface ProgramDetailModalProps {
    program: ProgramDetailData | null;
    onClose: () => void;
    onRegister: () => void;
}

export const PROGRAM_DATA: Record<string, ProgramDetailData> = {
    'pre-k': {
        id: 'pre-k',
        title: 'Chương trình MVK (Pre-K)',
        subtitle: 'Mầm non - Dành cho trẻ 3-4 tuổi',
        ageRange: '3 - 4 tuổi',
        description: 'Chương trình được thiết kế để giúp trẻ làm quen với môi trường học tập, phát triển ngôn ngữ và nhận thức thông qua các hoạt động vui chơi, bài hát và câu chuyện. Trẻ sẽ được tiếp xúc với tiếng Anh một cách tự nhiên và hào hứng.',
        highlights: [
            'Bé cần có sự đồng hành của cha hoặc mẹ.',
            'Học qua chơi (Play-based learning).',
            'Phát triển kỹ năng xã hội và cảm xúc.',
            'Làm quen với chữ cái, số đếm và màu sắc.'
        ],
        curriculum: [
            'Ngôn ngữ & Đọc viết: Mở rộng vốn từ, kể chuyện.',
            'Toán học sơ cấp: Nhận biết hình khối, số lượng.',
            'Khoa học & Đời sống: Tìm hiểu về thế giới xung quanh.',
            'Nghệ thuật & Sáng tạo: Thủ công, vẽ, âm nhạc.'
        ],
        schedule: 'Linh hoạt, các buổi tối trong tuần.'
    },
    'kindergarten': {
        id: 'kindergarten',
        title: 'Chương trình Mẫu giáo (Lớp K)',
        subtitle: 'Mẫu giáo - Dành cho trẻ 5 tuổi',
        ageRange: '5 tuổi',
        description: 'Bước đệm quan trọng giúp trẻ tự tin bước vào lớp 1. Chương trình tập trung vào việc xây dựng nền tảng học thuật vững chắc, đồng thời phát triển tính tự lập và các kỹ năng xã hội cần thiết.',
        highlights: [
            'Bé có thể tự tham gia lớp học (khuyến khích).',
            'Kết hợp học thuật và kỹ năng mềm.',
            'Chuẩn bị tâm thế sẵn sàng cho bậc Tiểu học.',
            'Tương tác trực tiếp với giáo viên bản ngữ.'
        ],
        curriculum: [
            'Ngôn ngữ Anh: Phonics, từ vựng theo chủ đề, giao tiếp cơ bản.',
            'Toán tư duy: Cộng trừ đơn giản, tư duy logic.',
            'Khoa học: Khám phá các hiện tượng tự nhiên.',
            'Kỹ năng xã hội: Làm việc nhóm, thuyết trình đơn giản.'
        ],
        schedule: 'Cố định theo khung giờ đăng ký.'
    },
    'grade-1': {
        id: 'grade-1',
        title: 'Chương trình Tiểu học (Lớp 1)',
        subtitle: 'Tiểu học - Thành công từ bước khởi đầu',
        ageRange: '6 tuổi',
        description: 'Chương trình chuẩn Common Core (Hoa Kỳ) giúp trẻ phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết. Nội dung học thuật chuyên sâu hơn, giúp trẻ khám phá thế giới và phát triển tư duy phản biện.',
        highlights: [
            'Học sinh học độc lập, rèn luyện tính tự giác.',
            'Chương trình chuẩn quốc tế.',
            'Đánh giá năng lực định kỳ.',
            'Phát triển tư duy toàn cầu.'
        ],
        curriculum: [
            'English Language Arts: Đọc hiểu, viết câu, ngữ pháp cơ bản.',
            'Mathematics: Toán đố, hình học, đo lường.',
            'Science: Thực hành quan sát, thí nghiệm đơn giản.',
            'Social Studies: Tìm hiểu về văn hóa và cộng đồng.'
        ],
        schedule: 'Lịch học ổn định, hỗ trợ học tập ngoài giờ.'
    }
};

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose, onRegister }) => {
    if (!program) return null;

    return (
        <Modal isOpen={!!program} onClose={onClose}>
            <div className="relative flex flex-col h-full max-h-[90vh]">
                {/* Header */}
                <div className="flex justify-between items-start p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
                    <div>
                        <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                            {program.ageRange}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{program.title}</h2>
                        <p className="text-slate-500 mt-1">{program.subtitle}</p>
                    </div>
                    <button title='Close'
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="prose prose-slate max-w-none">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tổng quan</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {program.description}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <h3 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                                    <span className="w-2 h-8 rounded-full bg-brand-blue block"></span>
                                    Điểm nổi bật
                                </h3>
                                <ul className="space-y-3">
                                    {program.highlights.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-orange mb-4 flex items-center gap-2">
                                    <span className="w-2 h-8 rounded-full bg-brand-orange block"></span>
                                    Nội dung đào tạo
                                </h3>
                                <ul className="space-y-3">
                                    {program.curriculum.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-sm text-slate-600">
                                <span className="font-bold text-slate-900">Lịch học:</span> {program.schedule}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 md:p-8 border-t border-slate-100 bg-white flex justify-end gap-4 shrink-0">
                    <Button variant="outline" onClick={onClose} className="!rounded-xl border-slate-300 text-slate-600 hover:bg-slate-50">
                        Đóng
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            onClose();
                            onRegister();
                        }}
                        className="!rounded-xl shadow-lg shadow-blue-200 px-8"
                    >
                        Đăng ký học thử ngay
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
