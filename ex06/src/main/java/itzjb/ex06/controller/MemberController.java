package itzjb.ex06.controller;

import io.swagger.v3.oas.annotations.Operation;
import itzjb.ex06.dto.MemberRequestDto;
import itzjb.ex06.entity.Member;
import itzjb.ex06.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class MemberController {

    private final MemberService memberService;

    @GetMapping("members")
    @Operation(summary = "회원 조회", description = "모든 회원 정보를 조회합니다.")
    public List<Member> getMembers() {
        return memberService.getMembers();
    }

    @GetMapping("members/{id}")
    @Operation(summary = "회원 조회", description = "회원 아이디를 통해 회원 정보를 조회합니다.")
    public Member getMemberById(@PathVariable Long id) {
        return memberService.getMemberById(id);
    }

    @PostMapping("members")
    @Operation(summary = "회원 등록", description = "회원 정보를 등록합니다.")
    public Member saveMember(@RequestBody MemberRequestDto memberRequest) {
        return memberService.createMember(memberRequest);
    }

    @PutMapping("members/{id}")
    @Operation(summary = "회원 수정", description = "회원 아이디를 통해 회원 정보를 수정합니다.")
    public Member updateMember(@PathVariable Long id, @RequestBody MemberRequestDto memberRequest) throws Exception {
        return memberService.updateMember(id, memberRequest);
    }

    @DeleteMapping("members/{id}")
    @Operation(summary = "회원 삭제", description = "회원 아이디를 통해 회원 정보를 삭제합니다.")
    public boolean deleteMember(@PathVariable Long id) throws Exception {
        return memberService.deleteMember(id);
    }
}