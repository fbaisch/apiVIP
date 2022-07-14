package fbaisch.Lead.http.controller;

import fbaisch.Lead.entity.Lead;
import fbaisch.Lead.service.LeadService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/lead")
public class LeadController {

    @Autowired
     private LeadService leadService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Lead salvar(@RequestBody Lead lead){
        return leadService.salvar(lead);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Lead> listaLeads(){
        return leadService.listaLeads();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Lead busccarPorId(@PathVariable("id") Long id){
        return leadService.buscarPorId(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Lead nao encontrado"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removerPorId(@PathVariable("id") Long id){
        leadService.buscarPorId(id)
                .map(lead -> {
                    leadService.removerPorId(lead.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Lead nao encontrado"));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarLead(@PathVariable("id") Long id, @RequestBody Lead lead){
        leadService.buscarPorId(id)
                .map(baseLead -> {
                    modelMapper.map(lead, baseLead);
                    leadService.salvar(baseLead);
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Lead nao encontrado"));
    }









}
