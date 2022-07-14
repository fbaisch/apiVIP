package fbaisch.Lead.service;

import fbaisch.Lead.entity.Lead;
import fbaisch.Lead.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeadService {

    @Autowired
    private LeadRepository leadRepository;

    public Lead salvar(Lead lead){
        return leadRepository.save(lead);
    }

    public List<Lead> listaLeads(){
        return leadRepository.findAll();
    }

    public Optional<Lead> buscarPorId(Long id){
        return leadRepository.findById(id);
    }

    public void removerPorId(Long id){
        leadRepository.deleteById(id);
    }

}
