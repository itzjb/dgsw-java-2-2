package itzjb.ex06.controller;

import itzjb.ex06.entity.Member;
import itzjb.ex06.repository.MemberRepository;
import itzjb.ex06.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class MemberController {

    private final MemberService memberService;

    @GetMapping("members")
    public List<Member> getMembers() {
        return memberService.getMembers();
    }

    @GetMapping("members/{id}")
    public Member getMemberById(@PathVariable Long id) {
        return memberService.getMemberById(id);
    }

}