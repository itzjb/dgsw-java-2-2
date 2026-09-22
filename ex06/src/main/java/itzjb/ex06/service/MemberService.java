package itzjb.ex06.service;

import itzjb.ex06.dto.MemberRequestDto;
import itzjb.ex06.entity.Member;
import itzjb.ex06.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public List<Member> getMembers() {
        return memberRepository.findAll();
    }

    public Member getMemberById(Long id) {
        return memberRepository.findById(id).orElse(null);
    }

    public void saveMember(Member member) {
        memberRepository.save(member);
    }

    public Member createMember(MemberRequestDto memberRequest) {
        Member newMember = new Member(memberRequest.getName(), memberRequest.getEmail());
        saveMember(newMember);
        return newMember;
    }

    public Member updateMember(Long id, MemberRequestDto memberRequest) throws Exception {
        Member existingMember = getMemberById(id);
        if (existingMember != null) {
            existingMember.setName(memberRequest.getName());
            existingMember.setEmail(memberRequest.getEmail());
            saveMember(existingMember);
        } else {
            throw new Exception("해당하는 유저 아이디 " + id + "가 없어 수정할 내용이 없습니다.");
        }
        return existingMember;
    }

    public boolean deleteMember(Long id) throws Exception {
        Member member = memberRepository
                .findById(id)
                .orElseThrow(() -> new Exception("해당하는 유저 아이디 " + id + "가 없어 삭제할 내용이 없습니다."));
        memberRepository.delete(member);
        return true;
    }
}
